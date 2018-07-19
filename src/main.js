import Vue from 'nativescript-vue';
import router from './router';
import store from './store';
import { TNSFontIcon, fonticon } from 'nativescript-fonticon';

import './styles.scss';
TNSFontIcon.debug = true;
TNSFontIcon.paths = {
  'fa': './css/fontawesome.css',
};
TNSFontIcon.loadCss();

Vue.config.silent = false;
Vue.filter('fonticon', fonticon)

new Vue({

  router,

  store,

}).$start();
