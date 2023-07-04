import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
// app.mount('#app')

app.use(router).mount('#app')



