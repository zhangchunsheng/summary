import Vue from 'vue';
import Router from 'vue-router';

import summary from './summary-2020';

Vue.use(Router);

const RouterModel = new Router({
  routes: [...summary]
});

RouterModel.beforeEach((to, from, next) => {
  next();
});

export default RouterModel;
