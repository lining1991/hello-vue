import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
console.log('vuexxxxxxxx');
export default new Vuex.Store({
  state: {
    list: [], // 首页列表数据
    count: 0
  },
  mutations: {
    add (state, payload) {
        let listObj = {
            title: payload.title,
            date: payload.date
        }
        state.list.unshift(listObj);
    },
    init (state, payload) {
      state.list.push(...payload.data);
    },
    increment (state, payload) {
        state.count += payload.count;
    }
  },
  actions: {

  },
});
