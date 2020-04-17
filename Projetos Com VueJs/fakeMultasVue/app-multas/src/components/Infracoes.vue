<template>
  <div>
    <div v-if="carregando === true">
      <h1 class="h1 text-center">Carregando</h1>
    </div>
    <div v-else-if="(Multa === null) && (carregando === false)">
      <h2 class="text-center">Placa: {{placa}} não foi encontrada</h2>

      <div class="justify-content-center d-flex pt-3">
        <b-button variant="danger" :to="{name: 'home'}">Nova Consulta</b-button>
      </div>
    </div>
    <div v-else-if="(carregando === false) && (Multa != null)">
      <b-row class="pt-3">
        <b-col cols="12" md="6">
          <div class="d-flex justify-content-center align-content-center">
            <p class="text-center pr-3">Data:</p>
            <b-form-input
              type="datetime-local"
              :value="Multa.DADOS_INFRACAO.DATAHORA"
              disabled
              readonly
            ></b-form-input>
          </div>
          <div class="d-flex pt-3">
            <p class="text-center pr-3">Local:</p>
            <b-form-input :value="Multa.LOCALIDADE" disabled readonly></b-form-input>
          </div>
          <div class="d-flex pt-3">
            <p class="text-center pr-3">Tipo:</p>
            <b-form-input :value="Multa.DADOS_INFRACAO.TIPO" disabled readonly></b-form-input>
          </div>
        </b-col>
        <b-col cols="12" md="6">
          <div class="d-flex justify-content-center">
            <p class="text-left pt-2 pr-2">Valor</p>
            <b-form-input :value="Multa.DADOS_INFRACAO.VALOR" disabled readonly></b-form-input>
          </div>
        </b-col>
      </b-row>
      <b-row class="pt-3">
        <b-col cols="12" md="6">
          <div v-if="multaIsVelocidade" class="pt-2">
            <p
              class="text-center text-danger"
            >Velocidade maxima permitida é: {{Multa.DADOS_INFRACAO.VEL_MAXIMA}} km/h</p>
          </div>
        </b-col>
        <b-col cols="12" md="6">
          <b-button variant="success" :to="{name: 'home'}">Nova Consulta</b-button>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "infracoes",
  props: ["placa"],
  created() {
    this.$store.dispatch("fetchMulta", this.placa);
  },
  beforeRouteUpdate(to, from, next) {
    to;
    from;
    this.$store.dispatch("fetchMulta", this.placa);
    next();
  },
  computed: {
    Multa() {
      return this.$store.state.multas;
    },
    carregando() {
      return this.$store.state.carregando;
    },
    multaIsVelocidade() {
      return this.Multa.DADOS_INFRACAO.TIPO === "VELOCIDADE" ? true : false;
    }
  }
};
</script>

<style>
</style>