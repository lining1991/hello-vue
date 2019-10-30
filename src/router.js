import Vue from 'vue';
import Router from 'vue-router';
import Calendar from './views/calendar.vue';
import Done from './views/done.vue';
import List from './views/list.vue';
import Mine from './views/mine.vue';
import Detail from './views/detail.vue';
Vue.use(Router);

// name是有什么用呢
export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/List'
    },
    {
      path: '/list',
      name: 'List',
      component: List,
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar,
    },
    {
      path: '/done',
      name: 'Done',
      component: Done,
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // 这个是异步的吗component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ],
});
