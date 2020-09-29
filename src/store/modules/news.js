import axios from "axios";

const state = {
  news: [],
};

const getters = {};

const mutations = {
  SET_NEWS: (state, arr) => {
    state.news = arr;
  },
};

const actions = {
  getNews: async ({ commit }) => {
    try {
      const res = await axios.get(
        "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"
      );
      console.log(res);
      // this.coins = res.data.DISPLAY // this will trigger error/warning of mutation state outside of mutation
      commit("SET_NEWS", res.data.Data);
    } catch (e) {
      console.error(e);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
