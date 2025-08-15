import { type App, type Plugin } from 'vue'
import HelloWorld from './HelloWorld.vue'

export { HelloWorld }

const components: Plugin = {
  install(app: App) {
    app.component('HelloWorld', HelloWorld)
  }
}

export default components