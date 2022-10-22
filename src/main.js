import { createApp } from "vue";
import "primeicons/primeicons.css";
import "primevue/resources/primevue.min.css";
import "./assets/css/style.css";
import "./assets/css/theme.css";

import App from "./App.vue";
import PrimeVue from "primevue/config";

import router from "./plugins/router";
import i18n from "./plugins/i18n";
import Layout from "./components/common/Layout.vue";

const app = createApp(App);

app.use(PrimeVue);
app.use(router);
app.use(i18n);

app.mount("#app");
app.component('Layout', Layout);
