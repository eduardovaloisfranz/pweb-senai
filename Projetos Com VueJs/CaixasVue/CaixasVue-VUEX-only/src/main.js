import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Store from './Store.js'

Vue.config.productionTip = false

new Vue({
  store: Store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
