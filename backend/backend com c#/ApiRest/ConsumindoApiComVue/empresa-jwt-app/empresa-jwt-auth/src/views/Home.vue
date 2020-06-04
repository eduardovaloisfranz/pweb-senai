<template>
  <b-row>
    <b-col cols="12" sm="12" md="12" lg="12" class="mt-3">
      {{token}}
      <div v-if="token">
        <b-list-group v-for="(funcionario, idx) in funcionarios" :key="funcionario.id">
          <b-list-group-item
            @click="handleExibirModal(funcionario, idx)"
          >Nome: {{funcionario.nome}} - Idade: {{funcionario.idade}} Cargo: {{funcionario.cargo.nome}}</b-list-group-item>
        </b-list-group>
      </div>
      <div v-else>
        <h1
          class="h1 text-danger text-center lead"
        >Você não tem autorização para ver o conteúdo desta página</h1>
      </div>
    </b-col>
    <b-modal v-model="exibirModal" centered hide-footer title="Painel Administrativo">
      <div class="d-flex justify-content-center m-2">
        <b-card
          :title="funcionarioSelecionado.nome"
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>Teste</b-card-text>
        </b-card>
      </div>
      <div class="m-2">
        <b-form-input
          class="p-3"
          v-model="novoFuncionario.nome"
          type="text"
          placeholder="Informe o Novo Nome: "
        ></b-form-input>
        <b-form-input
          class="p-3"
          v-model.number="novoFuncionario.idade"
          type="number"
          placeholder="Informe a Nova Idade"
        ></b-form-input>
        <div class="form-group">
          <label>Selecione o cargo</label>
          <select class="form-control" v-model="novoFuncionario.cargoID">
            <option v-for="cargo in cargos" :key="cargo.id" :value="cargo.id">{{cargo.nome}}</option>
          </select>
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <b-button variant="info" @click="exibirModal = false">Fechar modal</b-button>
        <b-button
          variant="success"
          :disabled="funcionarioIsValido"
          @click="handleEditFuncionario"
        >Editar Funcionario</b-button>
        <b-button variant="danger" @click="handleDeletarFuncionario">Deletar Funcionario</b-button>
      </div>
    </b-modal>
  </b-row>
</template>

<script>
import { mapState, mapActions } from "vuex";
import jwtDecode from "jwt-decode";
export default {
  name: "Home",
  data() {
    return {
      funcionarioSelecionado: {},
      exibirModal: false,
      novoFuncionario: {
        id: 0,
        nome: "",
        idade: 0,
        cargoID: 0
      },
      idxFunc: 0
    };
  },
  computed: {
    token() {
      return sessionStorage.getItem("token");
    },
    funcionarioIsValido() {
      return this.novoFuncionario.nome.length > 3 &&
        this.novoFuncionario.idade >= 18 &&
        this.novoFuncionario.cargoID != 0
        ? false
        : true;
    },
    ...mapState(["funcionarios", "cargos"])
  },
  beforeRouteEnter(to, from, next) {
    to;
    from;
    next(vm => {
      if (vm.token === null) {
        alert(
          "Você precisa estar logado para visualizar esta página, será redicionado para o login"
        );
        vm.$router.push("/login");
      } else {
        vm.getFuncionarios();
        vm.getCargos();
      }
    });
  },
  methods: {
    handleExibirModal(funcionario, idx) {
      console.log(funcionario);
      if (jwtDecode(this.token).role !== "1") {
        this.makeToast("danger");
      } else {
        this.funcionarioSelecionado = funcionario;
        this.idxFunc = idx;
        this.novoFuncionario.id = funcionario.id;
        this.exibirModal = true;
      }
    },
    makeToast(variant) {
      this.$bvToast.toast(
        "Você não possui permissão necessária para realizar essa função",
        {
          title: `Problema ao tentar editar funcionario`,
          variant: variant,
          solid: true
        }
      );
    },
    handleDeletarFuncionario() {},
    handleEditFuncionario() {
      let obj = {
        idx: this.idxFunc,
        obj: this.novoFuncionario
      };
      this.$store.dispatch("editFuncionario", obj);
      this.exibirModal = false;
    },

    ...mapActions(["getFuncionarios", "getCargos"])
  },
  created() {
    if (this.token !== null) {
      //this.getFuncionarios();
    }
  }
};
</script>

<style>
</style>