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
        // let listObj = {
        //   title: payload,
        //   date: Random.date(),
        //   content: Random.cparagraph(),
        //   isdone: Random.boolean(),
        //   category: Random.category()

        // }
        state.list.unshift(payload);
    },
    done (state, payload) {
        state.list.forEach(item => {
          if (item.uid === payload.uid) {
            console.log('发生了done');
            item.isdone = true;
          }
        });
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
