
import type { KeyVal } from '../types'
import storage from './storage'
import { randomStr } from './index'
import axios from 'axios'

type ST_SETTINGS = {
  muiltiLength?: number
  intervalTime?: number
}

const traceId = randomStr()

const httpPost = (url: string, params: KeyVal) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(function (res) {
        resolve(res)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

export class SendToKibana {
  appId: string = 'jzx-teacher'
  url: string = 'https://log.aixuexi.com/log/multi/jzx?strict=false' // Replace with actual endpoint
  settings: ST_SETTINGS = {
    muiltiLength: 20,
    intervalTime: 1000 * 60 * 5
  }
  sendData: KeyVal = {}
  constructor(url: string | null = null, appId: string | null = null, settings: ST_SETTINGS) {
    this.url = url || this.url
    this.appId = appId || this.appId
    this.settings = {
      ...this.settings,
      ...settings
    }
  }
  setCommon(data: KeyVal) {
    this.sendData = {
      ...this.sendData,
      ...data
    }
  }
  send(msg: KeyVal) {
    try {
      const storageKey = `jzx_kibanaLog_${storage.get('userId')}`
      const timeStamp = new Date().getTime()
      const storegeVal = JSON.parse(storage.get(storageKey) || '{}')
      const lastTime = storegeVal.timeStamp || timeStamp
      const logs = storegeVal.logs || []
      const state = storage.get(storageKey + '_state') || 0
      const msgDetail = {
        timestamp: timeStamp.toString(),
        userAgent: window.navigator.userAgent,
        pageUrl: window.location.href,
        traceId,
        appId: this.appId,
        ...this.sendData,
        ...msg,
      }
      logs.push(msgDetail)
      if (state !== 1 && (timeStamp - lastTime >= this.settings.intervalTime! || logs.length >= this.settings.muiltiLength!)) {
        storage.set(storageKey + '_state', 1)
        storage.remove(storageKey)
        httpPost(this.url, storegeVal.logs).then(() => {
          storage.remove(storageKey + '_state')
        })
      } else {
        storage.set(
          storageKey,
          JSON.stringify({
            timeStamp: lastTime,
            logs
          })
        )
        storage.remove(storageKey + '_state')
      }
    } catch (e) {
      console.log('sendKibanaLog error', e)
    }
  }
}