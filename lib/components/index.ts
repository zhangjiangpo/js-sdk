import { type App, type Plugin } from 'vue'
import HelloWorld from './HelloWorld.vue'

export { HelloWorld }

/**
 * vue组件入口 通过app.use(components) 注册全局组件
 */
const components: Plugin = {
  install(app: App) {
    app.component('HelloWorld', HelloWorld)
  }
}

export default components