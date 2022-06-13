import Vue from 'vue';
import Cookies from 'js-cookie';
import Element from 'element-ui';


import App from './App';
import store from '@/store';
import router from '@/router';
import permission from '@/directive/permission';

import '@/assets/icons'; // icon
import '@/permission'; // permission control

//css: 
import '@/assets/styles/index.scss';

Vue.prototype.msgSuccess = function (msg) {
  this.$message({ showClose: true, message: msg, type: "success" });
};

Vue.prototype.msgError = function (msg) {
  this.$message({ showClose: true, message: msg, type: "error" });
};

Vue.prototype.msgInfo = function (msg) {
  this.$message.info(msg);
};

Vue.use(permission);


Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

Vue.config.productionTip = false;

import { message,rem } from '@/assets/js/common';
Vue.prototype.message =  message;
rem();

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})