import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        caixas: [
            {
                id: 0,
                conteudo: 1,
                estilo: "orange"
            },
            {
                id: 1,
                conteudo: 2,
                estilo: "green"
            },
            {
                id: 2,
                conteudo: 3,
                estilo: "blue"
            }
        ]
    },
    mutations: {
        ADICIONAR_CAIXA(state, payload) {
            state.caixas.push(payload)
            localStorage.caixas = JSON.stringify(state.caixas)
            console.log(JSON.parse(localStorage.caixas))
        },
        APAGAR_CAIXA(state, idx) {
            state.caixas.splice(idx, 1);
            localStorage.caixas = JSON.stringify(state.caixas)
        },
        ALTERAR_CAIXA(state, payload) {
            Vue.set(state.caixas, payload.id, payload);
            localStorage.caixas = JSON.stringify(state.caixas)
        },
        ADICIONAR_CAIXAS_INICIO(state, payload) {
            state.caixas = payload;
        }
    }
})