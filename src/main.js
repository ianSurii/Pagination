import { createApp } from 'vue'
import { createPopper } from '@popperjs/core';
import App from './App.vue'
import './assets/bootstrap-5.2.0-dist/css/bootstrap.min.css'  
import './assets/bootstrap-5.2.0-dist/js/bootstrap.min.js' 
import router from'./router/index.js'

const app = createApp(App)
app.use(router)
app.mount("#app")





