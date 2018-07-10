if (process.env.NODE_ENV === 'production') {
    window.endpoint = 'http://localhost:3000';
} else {
    window.endpoint = 'http://localhost:3000';
}
// Global Variables
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

require('./css/main.css');

import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import Home from './components/Home.vue'
import Create from './components/Create.vue'
import BeadSelector from './components/BeadSelector.vue'
import NecklaceSelector from './components/NecklaceSelector.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    
    {
      path: '/create',
      name: 'Create',
      component: Create
    },
    { path: '/bracelet',
             name: 'bracelet',
             component: BeadSelector,
             props: true
            },
    { path: '/necklace',
             name: 'necklace',
             component: NecklaceSelector,
             props: true
            }
  ]

const router = new VueRouter({
mode: 'history',
routes,
scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
    }
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
    router,
  render: h => h(App)
})
