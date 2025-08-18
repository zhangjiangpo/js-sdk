
import type { KeyVal } from '../types'
import storage from './storage'
import { randomStr } from './index'
import axios from 'axios'

/**
 * 发送日志到kibana setting说明
 * muiltiLength: 超过多少条日志发送一次
 * intervalTime: 超过多少时间发送一次
 */
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
/**
 * 发送日志到kibana的类
 */
export class SendToKibana {
  appId: string = 'jzx-teacher' //日志查询的appId 业务标识符
  url: string = 'https://log.aixuexi.com/log/multi/jzx?strict=false' // Replace with actual endpoint
  settings: ST_SETTINGS = {
    muiltiLength: 20,
    intervalTime: 1000 * 60 * 5
  }
  sendData: KeyVal = {}
  /**
   * 构造函数
   * @param url 日志接收地址 默认jzx的
   * @param appId 业务标识符 默认jzx-teacher
   * @param settings 发送设置 ST_SETTINGS
   */
  constructor(url?: string | null, appId?: string | null, settings?: ST_SETTINGS) {
    this.url = url || this.url
    this.appId = appId || this.appId
    this.settings = {
      ...this.settings,
      ...settings
    }
  }
  /**
   * 设置公共参数
   * @param data 设置公共参数 后续日志都会携带
   */
  setCommon(data: KeyVal) {
    this.sendData = {
      ...this.sendData,
      ...data
    }
  }
  /**
   * 发送日志
   * @param msg KeyVal 发送的日志内容
   */
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