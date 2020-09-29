import Vue from "vue";
import Vuex from "vuex";
import price from "./modules/price";
import news from "./modules/news";

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  modules: {
    price,
    news,
  },
});
