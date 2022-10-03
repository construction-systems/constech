import { createApp } from 'vue'
import 'primeicons/primeicons.css';
import 'primevue/resources/primevue.min.css';
import './assets/css/style.css';
import './assets/css/theme.css';

import App from './App.vue'
import PrimeVue from 'primevue/config'

const app = createApp(App)
app.use(PrimeVue)

app.mount('#app')
