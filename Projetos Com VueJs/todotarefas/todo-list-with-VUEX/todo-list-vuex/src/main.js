import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Store from './Store.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import StatusTodo from '@/components/StatusTodo'
import ListTodos from '@/components/ListTodos'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.component('ListTodos', ListTodos)

Vue.component('StatusTodo', StatusTodo)

Vue.config.productionTip = false

new Vue({
  store: Store,
  render: h => h(App),
}).$mount('#app')
