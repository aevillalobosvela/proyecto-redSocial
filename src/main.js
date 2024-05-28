import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import services from "./services";

const app = createApp(App);

// Add the services to global properties
app.config.globalProperties.$services = services;

// Use Vuex store and Vue Router
app.use(store).use(router).mount('#app');