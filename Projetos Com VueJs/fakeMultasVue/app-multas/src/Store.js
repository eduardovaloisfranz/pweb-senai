import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

export default new vuex.Store({
    state: {
        multas: null,
        carregando: true,
        historicoPlacas: []
    },
    mutations: {
        UPDATE_MULTA(state, payload) {
            state.multas = payload
        },
        UPDATE_CARREGAMENTO(state, payload) {
            state.carregando = payload;
        },
        ADD_PLACA_HISTORICO(state, payload) {
            state.historicoPlacas.push(payload)
        }
    },
    actions: {
        fetchMulta(context, payload) {
            context.commit('UPDATE_CARREGAMENTO', true)
            const URL_TO_FETCH = 'http://localhost:8080/api/multas.json'
            fetch(URL_TO_FETCH)
                .then(r => {
                    r.json().then(r => {
                        const obj = r.PLACAS.find(function (item) {
                            return item.PLACA === payload
                        })
                        context.commit('ADD_PLACA_HISTORICO', payload)
                        if (obj) {
                            context.commit('UPDATE_MULTA', obj)
                            context.commit('UPDATE_CARREGAMENTO', false)
                        } else {
                            context.commit('UPDATE_MULTA', null)
                            context.commit('UPDATE_CARREGAMENTO', false)
                        }


                    })
                }).catch(r => console.log(r))
        }
    }
})