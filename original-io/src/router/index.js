import Vue from 'vue';
import Router from 'vue-router';
import Produto from '@/components/Produto';
import Prod from '@/components/Prod';
import NotFound from '@/components/NotFound';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/produto/:id',
      name: 'Produto',
      component: Produto,
    },
    {
      path: '/500',
      name: 'NotFound',
      component: NotFound,
    }
    /*,
    {
      path: '/:id',
      name: 'Prod',
      component: Prod,
    }*/
  ],
});
