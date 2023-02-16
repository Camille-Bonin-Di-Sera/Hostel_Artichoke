import { createApp } from  'vue'
import App from  './App.vue'
import router from  './router'
import  './index.css'
import axios from  'axios'

axios.defaults.baseURL = 'http://localhost:8000/api/v1/' ;

import './assets/Style/main.css'

const app = createApp(App)

// @ts-ignore
app.use(router)

app.mount('#app')



export default {

}
