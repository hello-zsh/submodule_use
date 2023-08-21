import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ViewUIPlus from 'view-ui-plus'

createApp(App)
.use(ViewUIPlus)
.mount('#app')
