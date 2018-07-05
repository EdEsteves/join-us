import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueRx from 'vue-rx';
import VueResource from 'vue-resource';
import Rx from 'rxjs/Rx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App';


Vue.use(BootstrapVue);

Vue.use(VueRx, Rx);

Vue.use(VueResource);


new Vue({
  el: '#app',
  render: h => h(App),
}).$mount('#app');
