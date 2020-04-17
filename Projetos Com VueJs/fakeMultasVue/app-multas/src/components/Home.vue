<template>
  <b-row class="pt-3">
    <b-col cols="2" class="d-flex justify-content-center align-content-center">
      <p class="text-center pt-2">Placa</p>
    </b-col>
    <b-col cols="8">
      <b-form-input v-model="placa" placeholder="Informe a placa"></b-form-input>
    </b-col>
    <b-col cols="2">
      <b-button variant="success" :to="{name: 'infracoes', params: { placa: placa}}">Ok</b-button>
    </b-col>
    <b-col cols="12" md="12">
      <h1 class="h1 text-center">Lista de Placas buscadas</h1>
      <b-list-group>
        <b-list-group-item
          v-for="(placa, idx) in historicoPlacas"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
          :key="placa + idx"
          :active="ativo"
        >
          <div class="d-flex justify-content-between align-items-center">
            <p class="text-center">{{placa}}</p>
            <b-button
              variant="success"
              :to="{name: 'infracoes', params: { placa: placa}}"
            >Buscar novamente</b-button>
          </div>
        </b-list-group-item>
      </b-list-group>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      placa: "AAA",
      ativo: false
    };
  },
  computed: {
    historicoPlacas() {
      return this.$store.state.historicoPlacas;
    }
  },
  methods: {
    handleMouseEnter() {
      this.ativo = true;
    },
    handleMouseLeave() {
      this.ativo = false;
    }
  }
};
</script>

<style>
</style>