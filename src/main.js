import { createApp } from 'vue'
import 'primeicons/primeicons.css';
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css';
import './assets/css/style.css';

import App from './App.vue'
import PrimeVue from 'primevue/config'

import router from './routes/router'

const app = createApp(App)
app.use(PrimeVue)
app.use(router)

app.mount('#app')
