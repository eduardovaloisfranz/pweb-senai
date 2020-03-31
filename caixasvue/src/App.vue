<template>
  <v-app>
    <v-content>
      <h1 class="display-1 text-center">Lista de Caixas</h1>
      <v-container fluid>
        <caixas :caixas="caixas" @adicionar-caixa="adicionarCaixa" @apagar-caixa="apagarCaixa" />
        <ferramentas :caixas="caixas" @alterar-caixa="alterarCaixa" />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import caixas from "./components/caixas";
import ferramentas from "./components/ferramentas";

export default {
  name: "App",
  data() {
    return {
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
    };
  },
  components: {
    caixas,
    ferramentas
  },
  methods: {
    adicionarCaixa(caixa) {
      let ultimoId = 0;
      if (this.caixas.undefined || this.caixas.length == 1) {
        ultimoId = 0;
      } else if (this.caixas.length) {
        ultimoId = this.caixas[this.caixas.length - 1].id;
      }

      caixa.id = ultimoId + 1;
      this.caixas.push(caixa);
      localStorage.caixas = JSON.stringify(this.caixas);
    },
    alterarCaixa(caixa) {
      this.$set(this.caixas, caixa.id, caixa);
      localStorage.caixas = JSON.stringify(this.caixas);
    },
    verificarLocalStorage() {
      if (localStorage.caixas === undefined) {
        localStorage.caixas = JSON.stringify(this.caixas);
      } else {
        this.caixas = JSON.parse(localStorage.caixas);
      }
    },
    apagarCaixa(index) {
      this.caixas.splice(index, 1);
      localStorage.caixas = JSON.stringify(this.caixas);
    }
  },
  created() {
    this.verificarLocalStorage();
  }
};
</script>

<style>
</style>