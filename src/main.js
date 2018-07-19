import Vue from 'nativescript-vue';
import router from './router';
import store from './store';
import './styles.scss';
import { TNSFontIcon, fonticon } from 'nativescript-fonticon';

// Uncommment the following to see NativeScript-Vue output logs
Vue.config.silent = false;


TNSFontIcon.debug = true;
TNSFontIcon.paths = {
  'fa': './css/fontawesome.css',
  'ion': './ionicons.css'
};
TNSFontIcon.loadCss();

Vue.filter('fonticon', fonticon)

new Vue({

  router,

  store,

}).$start();
