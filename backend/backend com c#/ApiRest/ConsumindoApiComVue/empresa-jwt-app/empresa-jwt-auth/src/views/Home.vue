<template>
  <b-row>
    <b-col cols="12" sm="12" md="12" lg="12">
      o token é:
      <p>{{token}}</p>
      {{funcionarios}}
    </b-col>
  </b-row>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Home",
  computed: {
    token() {
      return sessionStorage.getItem("token");
    },
    ...mapState(["funcionarios"])
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
      }
    });
  },
  methods: {
    ...mapActions(["getFuncionarios"])
  },
  created() {
    console.log("Vai executar quando ser criado!");
    this.getFuncionarios();
  }
};
</script>

<style>
</style>