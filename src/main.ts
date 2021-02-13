import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import '@mdi/font/css/materialdesignicons.css';
import { sequelize } from "./getdb";

Vue.config.productionTip = false;

sequelize.authenticate().then(
  () => console.log("connected")
).catch((err: any) => console.log(err))

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
