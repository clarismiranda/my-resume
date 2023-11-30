import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lang: 'EN', // Set the initial value for lang
  },
  mutations: {
    setLang(state, lang) {
      state.lang = lang;
    },
  },
  actions: {
    setLang(context, lang) {
      context.commit('setLang', lang);
    },
  },
  getters: {
    lang: (state) => state.lang,
  },
});
