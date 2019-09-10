import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
console.log('vuexxxxxxxx');
export default new Vuex.Store({
  state: {
    list: [] // 首页列表数据
  },
  mutations: {
    add (state, payload) {
        let listObj = {
            text: payload.text,
            date: payload.date
        }
        state.list.unshift(listObj);
    }
  },
  actions: {

  },
});