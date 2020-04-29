<template>
  <div id="app"></div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  components: {},
  methods: {
    getData() {
      const URL_TO_FECH = "http://localhost:61157/api/funcionario";
      axios
        .get(URL_TO_FECH)
        .then(function(response) {
          console.log(response.data);
          let { id, fk_cargo, idade, nome, cargos } = response.data;
          let obj = {
            id,
            nomeFuncionario: nome,
            idade,
            fk_cargo,
            nome,
            cargos: {
              nomeCargo: cargos.nome
            }
          };
          console.log(obj);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        })
        .then(function() {
          // always executed
        });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style>
</style>
