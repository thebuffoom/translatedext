import Vue from 'vue';
import Vuex from 'vuex';
import per from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [per()],
  state: {
    list: [],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
