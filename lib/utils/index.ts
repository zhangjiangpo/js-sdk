
const RandomString = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789_"
// 生成随机字符串
export function randomStr(len: number = 20) {
  let rsl = RandomString.length
  let result = ""
  for (let i = 0; i < len; i++) result += RandomString.charAt(Math.floor(Math.random() * rsl));
  return result
}