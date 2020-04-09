import Vue from 'vue'
import VueRouter from 'vue-router'
import Caixas from './components/caixas'
import Ferramentas from './components/ferramentas'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'home',
            path: '/',
            component: Caixas,
            children: [
                {
                    name: 'ferramentas',
                    path: '/ferramentas',
                    component: Ferramentas
                }
            ]
        }
    ]
})