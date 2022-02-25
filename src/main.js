import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './index.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import router from './router'
import App from './App.vue'

library.add(fas)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('fa', FontAwesomeIcon)
app.mount('#app')
