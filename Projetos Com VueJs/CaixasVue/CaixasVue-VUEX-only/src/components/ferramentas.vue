<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-select
        :items="caixas"
        v-model="novaCaixa.id"
        item-value="id"
        item-text="conteudo"
        label="Lista de Caixas"
        dense
        outlined
      ></v-select>
    </v-col>
    <v-col md="6" cols="12">
      <v-col class="d-flex">
        <v-text-field
          v-model="novaCaixa.conteudo"
          label="Digite o Conteúdo da Caixa"
          placeholder="Digite Algo"
        ></v-text-field>
        <v-btn @click="alterarCaixa" color="primary">Ok</v-btn>
      </v-col>

      <v-col class="d-flex">
        <v-btn @click="novaCaixa.estilo = 'orange'" class="orange" id="caixaNova"></v-btn>
        <v-btn @click="novaCaixa.estilo = 'green'" class="green" id="caixaNova"></v-btn>
        <v-btn @click="novaCaixa.estilo = 'blue'" class="blue" id="caixaNova"></v-btn>
      </v-col>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "ferramentas",
  data() {
    return {
      novaCaixa: {
        id: 0,
        conteudo: "Default",
        estilo: "black"
      }
    };
  },
  methods: {
    ...mapMutations(["ALTERAR_CAIXA"]),
    alterarCaixa() {
      const obj = {
        id: this.novaCaixa.id,
        conteudo: this.novaCaixa.conteudo,
        estilo: this.novaCaixa.estilo
      };
      this.ALTERAR_CAIXA(obj);
      //this.$emit("alterar-caixa", obj);
    }
  },
  computed: {
    ...mapState(["caixas"])
  }
};
</script>

<style scoped>
#caixaNova {
  width: 75px;
  height: 75px;
}
</style>