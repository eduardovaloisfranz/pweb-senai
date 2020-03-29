<template>
  <!-- App.vue -->

  <v-app>
    <v-content>
      <v-container fluid>
        <caixas :caixas="caixas" @adicionar-caixa="adicionarCaixa" />
        <ferramentas :caixas="caixas" @alterar-caixa="alterarCaixa" />
      </v-container>
    </v-content>
    <!-- -->
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
      const ultimoId = this.caixas[this.caixas.length - 1].id;
      caixa.id = ultimoId + 1;
      this.caixas.push(caixa);
    },
    alterarCaixa(caixa) {
      this.$set(this.caixas, caixa.id, caixa);
    }
  }
};
</script>

<style>
</style>