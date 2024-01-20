import { createApp } from 'vue'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router/router';
import axios from 'axios'
import App from './App.vue'

const app = createApp(App)

app.use(router);

app.config.globalProperties.$http = axios

app.mount('#app')
