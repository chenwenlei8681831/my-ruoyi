import Vue from 'vue';
import Cookies from 'js-cookie';
import Element from 'element-ui';


import App from './App';
import store from '@/store';
import router from '@/router';
import permission from '@/directive/permission';

import '@/assets/icons'; // icon
import '@/permission'; // permission control

import rem from '../public/js/rem';
rem();

//css: 
import '@/assets/styles/index.scss';
import '../public/css/reset.css';
import '../public/css/public.css';
import '../public/css/ele.css';
import '../public/css/me.css';
import '../public/css/flex.css';
import '../public/css/fontsize.css';
import '../public/css/color.css';



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

Vue.prototype.message = function (title,types) {//类型：success error warning
  let type = types?types:'success';
  this.$message({
      type: type,
      message: title,
      dangerouslyUseHTMLString: true
  });
};

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
