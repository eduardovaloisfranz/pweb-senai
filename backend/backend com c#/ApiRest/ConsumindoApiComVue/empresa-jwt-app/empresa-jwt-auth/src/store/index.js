import Vue from "vue";
import Vuex from "vuex";
import { api } from "@/services";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    funcionarios: [],
  },
  mutations: {
    SETAR_FUNCIONARIOS(state, payload) {
      state.funcionarios = payload;
    },
  },
  actions: {
    getFuncionarios(context) {
      api
        .get("api/funcionario")
        .then((res) => {
          console.log(res);
          context.commit("SETAR_FUNCIONARIOS", res.data);
        })
        .catch((err) => console.log("Erro: " + err));
    },
  },
});
