
import { SendToKibana } from './sendToKibana'
export * from './sendToKibana'
import storage from './storage'
export * from './storage'

/**
 * 生成随机字符串
 * @param len 生成随机字符串
 * @returns string
 */
export function randomStr(len: number = 20) {
  const RandomString = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789_"
  let rsl = RandomString.length
  let result = ""
  for (let i = 0; i < len; i++) result += RandomString.charAt(Math.floor(Math.random() * rsl));
  return result
}

export default {
  SendToKibana,
  randomStr,
  storage
}