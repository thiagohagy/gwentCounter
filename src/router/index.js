import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../components/Home';
import Faction from '../components/counter/Faction';
import Counter from '../components/counter/Counter';

const router = new VueRouter({
  pageRouting: true,
  routes: [
    // {
    //   path: '/home',
    //   component: Home,
    //   meta: {
    //     title: 'Início',
    //   },
    // },
    {
      path: '/faction',
      component: Faction,
      meta: {
        title: 'Facções',
      },
    },
    {
      path: '/counter',
      component: Counter,
      meta: {
        title: 'Contador',
      },
    },
    { path: '*', redirect: '/faction'},
  ],
});

router.replace('/faction');

module.exports = router;
