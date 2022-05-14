import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './index.css'
import axios from "axios";
import VueAxios from 'vue-axios';

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()


app.use(VueAxios, axios)
app.use(pinia)
app.use(router)

app.mount('#app')
