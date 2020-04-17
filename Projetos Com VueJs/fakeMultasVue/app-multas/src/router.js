import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/components/Home'
import infracoes from '@/components/Infracoes'
Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'home',
            path: '/main',
            component: home
        },
        {
            name: 'infracoes',
            path: '/home/:placa',
            props: true,
            component: infracoes
        },
        {
            path: '*',
            redirect: '/main'
        }
    ]
})