import Vue from "vue";
import Vuex from "vuex";
import { api } from "@/services";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    funcionarios: [],
    cargos: [],
    usuarioLogado: null,
  },
  mutations: {
    SETAR_FUNCIONARIOS(state, payload) {
      state.funcionarios = payload;
    },
    SETAR_USUARIO_LOGADO(state, payload) {
      state.usuarioLogado = payload;
    },
    SETAR_CARGOS(state, payload) {
      state.cargos = payload;
    },
    EDITAR_USUARIO(state, payload) {
      console.log(payload);
      state.funcionarios.splice(payload.idx, 1, payload.obj);
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
    getCargos(context) {
      api
        .get("api/cargo")
        .then((r) => context.commit("SETAR_CARGOS", r.data))
        .catch((err) => console.log("Erro ao setar os cargos" + err));
    },
    editFuncionario(context, payload) {
      api
        .put(`api/funcionario/${payload.obj.id}`, payload.obj)
        .then((res) => {
          let { cargo, cargoID, idade, nome } = res.data;
          payload.obj = {
            id: payload.obj.id,
            cargo,
            cargoID,
            idade,
            nome,
          };
          context.commit("EDITAR_USUARIO", payload);
        })
        .catch((err) => console.log("problema ao alterar registro " + err));
    },
  },
});
