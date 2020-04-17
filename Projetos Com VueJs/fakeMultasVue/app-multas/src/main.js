import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import Router from './router.js'
import Store from './Store'
Vue.config.productionTip = false

new Vue({
  router: Router,
  store: Store,
  render: h => h(App),
}).$mount('#app')
