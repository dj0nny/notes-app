import Vue from 'vue';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import App from './App.vue';
import router from './router';

import 'uikit/dist/css/uikit.min.css';

UIkit.use(Icons);

Vue.config.productionTip = false;

Vue.prototype.$uikit = UIkit;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
