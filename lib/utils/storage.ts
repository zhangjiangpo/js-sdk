type StorageType = 'local' | 'session'

export const storage = {
  set(key: string, value: any, type: StorageType = 'local') {
    window[`${type}Storage`].setItem(key, JSON.stringify(value))
  },
  get(key: string, type: StorageType = 'local') {
    const storageObj = window[`${type}Storage`]
    if (storageObj.getItem(key) && storageObj.getItem(key) !== 'undefined') return JSON.parse(storageObj.getItem(key)!)
    return null
  },
  remove(key: string, type: StorageType = 'local') {
    window[`${type}Storage`].removeItem(key)
  },
  clear(type: StorageType = 'local') {
    window[`${type}Storage`].clear()
  }
}
export default storage
