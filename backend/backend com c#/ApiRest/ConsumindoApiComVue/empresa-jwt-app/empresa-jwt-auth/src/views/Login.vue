<template>
  <b-row class="pt-3 justify-content-center align-items-center">
    <b-col cols="12" sm="8" md="4" lg="4">
      <h2 class="h2 text-center text-monospace">Por favor, faça login</h2>
      <b-form>
        <b-form-group>
          <b-form-input
            id="input-1"
            v-model="funcionario.email"
            type="email"
            required
            placeholder="Informe o email"
          ></b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-input
            id="input-2"
            v-model="funcionario.senha"
            type="password"
            required
            placeholder="Informe sua senha"
          ></b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-input
            id="input-2"
            v-model="confirmarSenha"
            type="password"
            required
            placeholder="Confirme sua senha"
          ></b-form-input>
        </b-form-group>
        <div class="d-flex justify-content-between">
          <b-button
            variant="success"
            @click.prevent="efetuarLogin"
            :disabled="validarLogin"
            type="submit"
          >Login</b-button>
        </div>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
import { api } from "@/services";
export default {
  name: "Login",
  data() {
    return {
      funcionario: {
        email: "",
        senha: ""
      },
      confirmarSenha: ""
    };
  },
  methods: {
    efetuarLogin() {
      api
        .post("api/funcionario/login", this.funcionario)
        .then(res => {
          sessionStorage.setItem("token", res.data[0]);
          sessionStorage.setItem("usuarioLogado", JSON.stringify(res.data[1]));
          this.$store.commit("SETAR_USUARIO_LOGADO", res.data[1]);
          alert(
            "Login efetuado com sucesso, redirecionando para a home em alguns segundos"
          );
          setTimeout(() => {
            this.$router.push("/");
          }, 1500);
        })
        .catch(() =>
          alert(
            "Problema ao efetuar o login, cheque os dados e tente novamente!"
          )
        );
    }
  },
  computed: {
    validarLogin() {
      return this.funcionario.senha === this.confirmarSenha &&
        this.funcionario.email.length > 4 &&
        this.funcionario.senha.length > 2 &&
        this.confirmarSenha.length > 2
        ? false
        : true;
    }
  }
};
</script>

<style>
</style>