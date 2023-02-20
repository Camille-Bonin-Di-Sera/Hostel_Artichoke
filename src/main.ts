import { createApp } from  'vue'
import App from  './App.vue'
import router from  './router'
import  './index.css'
import axios from  'axios'

axios.defaults.baseURL = import.meta.env.VITE_URL_API;


import './assets/Style/main.css'

const app = createApp(App)

// @ts-ignore
app.use(router)

app.mount('#app')



export default {

}
