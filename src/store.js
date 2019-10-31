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
		update (state, payload) {
			state.list.forEach((item, index) => {
				console.log('update', payload);
				if (item.uid === payload.uid) {
					state.list[index] = payload;
				}
			});
		},
		done (state, payload) {
			// ? 这样子的用for循环会不会更好些呢 可以break能省掉一些循环
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
