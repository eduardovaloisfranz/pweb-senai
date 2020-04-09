<template>
  <v-app>
    <v-content>
      <h1 class="display-1 text-center">Lista de Caixas</h1>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "App",
  components: {},
  methods: {
    ...mapMutations(["ADICIONAR_CAIXAS_INICIO"]),
    verificarLocalStorage() {
      if (localStorage.caixas === undefined || localStorage.caixas == "") {
        localStorage.caixas = JSON.stringify(this.caixas);
      } else {
        this.ADICIONAR_CAIXAS_INICIO(JSON.parse(localStorage.caixas));
      }
    }
  },
  computed: {
    ...mapState(["caixas"])
  },
  created() {
    this.verificarLocalStorage();
  }
};
</script>

<style>
</style>