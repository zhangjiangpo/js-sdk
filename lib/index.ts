export * from './core'
export * from './components'

import * as core from './core'
import components from './components'

export default {
  ...core,
  components
}
