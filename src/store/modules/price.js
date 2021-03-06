import axios from "axios";

const state = {
  coins: {},
};

const getters = {};

const mutations = {
  SET_COINS: (state, obj) => {
    // state.coins = obj;
    state.coins = Object.assign({}, obj);
    // state.coins = { ...state.coins, obj };
  },
};

const actions = {
  getCoins: async ({ commit }) => {
    try {
      const res = await axios.get(
        "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,DOGE,USDT,DASH&tsyms=USD"
      );
      console.log(res);
      // this.coins = res.data.DISPLAY // this will trigger error/warning of mutation state outside of mutation
      commit("SET_COINS", res.data.DISPLAY);
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
