export { default as storage } from '../utils/storage'
export { SendToKibana } from '../utils/sendToKibana'
export { randomStr } from '../utils'
export * as utils from '../utils'

import storage from '../utils/storage'
import { SendToKibana } from '../utils/sendToKibana'
import * as utils from '../utils'

export default {
  storage,
  SendToKibana,
  ...utils
}
