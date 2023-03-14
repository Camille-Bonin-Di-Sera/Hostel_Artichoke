import { createApp } from  'vue'
import App from  './App.vue'
import router from  './router'
import  './index.css'
import axios from  'axios'
import {store} from "@/store";

axios.defaults.baseURL = import.meta.env.VITE_URL_API;
import 'vue-router'
import './assets/Style/main.css'

const app = createApp(App)

// @ts-ignore
app.use(router)

app.mount('#app')


declare module 'vue-router' {
    interface RouteMeta {
        // is optional
        isAdmin?: boolean
        // must be declared by every route
        requiresAuth: boolean
    }
}
export default {

}
