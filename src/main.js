import './assets/main.css'

import { createApp } from 'vue'
import routes from './router'
import VueCryptojs from 'vue-cryptojs'
import App from './App.vue'

import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

createApp(App).use(Toast).use(routes).use(VueCryptojs).mount('#app')
