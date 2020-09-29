import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

import { store } from "./store/store";
import { routes } from "./routes";

Vue.config.productionTip = false;

Vue.use(VueRouter);

Vue.filter("unixToDate", (value) => {
  return new Date(value * 1000).toLocaleDateString("en-US");
});

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
