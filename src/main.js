// import '@babel/polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './mock.js';

// import './css/icon/demo.css';
require('./css/icons.scss');


// Vue.config.productionTip = false;
// 创建全局公用的过滤器
Vue.filter('formatDate', function (value) {
  if (!value || typeof value === 'string') return value;
  if (Object.prototype.toString.call(value) === '[object Date]') {
    return `${value.getYear()}-${value.getMonth()}-${value.getDate()}`;
  }
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
