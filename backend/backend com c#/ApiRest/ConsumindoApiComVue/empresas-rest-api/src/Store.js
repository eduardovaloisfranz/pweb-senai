import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        funcionarios: []
    },
    mutations: {
        UPDATE_FUNCIONARIOS(state, payload) {
            state.funcionarios = payload;
        },
        ADD_FUNCIONARIO(state, payload) {
            state.funcionarios.push(payload);
        }
    },
    actions: {
        addFuncionarioFetch(context, payload) {
            context.mutations.commit('UPDATE_FUNCIONARIOS', payload);
        },
        addFuncionario(context, payload) {
            context.mutations.commit('ADD_FUNCIONARIO', payload)
        }

    }

})