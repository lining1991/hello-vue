import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {

//   },
//   mutations: {

//   },
//   actions: {

//   },
// });
// ?state
export default new Vuex.Store({
state: {
    love: '',
},
mutations: {
    change(state, payload) {
        state.love = payload;
    },
},
getters: {
    text: (state) => state.love,
},
});
