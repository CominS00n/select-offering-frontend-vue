import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import routes from './router'
import VueCryptojs from 'vue-cryptojs'

import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const app = createApp(App)

app.use(Toast)
app.use(routes)
app.use(VueCryptojs)
app.mount('#app')
