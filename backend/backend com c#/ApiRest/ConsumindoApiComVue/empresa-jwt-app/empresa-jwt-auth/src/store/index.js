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
      state.funcionarios.splice(payload.idx, 1, payload.obj);
    },
    DELETAR_FUNCIONARIO(state, payload) {
      console.log(payload.idx);
      let id = state.funcionarios.findIndex((el) => el.id === payload.idx);
      state.funcionarios.splice(id, 1);
    },
    ADD_FUNCIONARIO(state, payload) {
      state.funcionarios.push(payload);
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
    deletarFuncionario(context, payload) {
      api
        .delete(`api/funcionario/${payload.idx}`)
        .then(() => context.commit("DELETAR_FUNCIONARIO", payload))
        .catch((err) =>
          console.log("Erro ao tentar deletar o funcionário: " + err)
        );
    },
    addFuncionario(context, payload) {
      console.log("caiu aqui:");
      payload.senha = "123";

      api
        .post("api/funcionario", payload)
        .then((r) => {
          let { nome, idade, cargoID, cargo } = r.data;
          let obj = {
            nome,
            idade,
            cargoID,
            cargo,
          };
          console.log(r.data);
          context.commit("ADD_FUNCIONARIO", obj);
        })
        .catch((err) => console.log("Erro ao adicionar funcionario: " + err));
    },
  },
});
