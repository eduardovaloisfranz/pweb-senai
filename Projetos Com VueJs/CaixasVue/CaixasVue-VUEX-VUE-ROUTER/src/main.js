import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Store from './Store.js'
import Routes from './router'

Vue.config.productionTip = false

new Vue({
  router: Routes,
  store: Store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
