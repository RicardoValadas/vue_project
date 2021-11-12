import { createApp } from "vue";
import axios from "axios";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

createApp(App).use(store, axios)
    .use(router)
    .mount("#app");
