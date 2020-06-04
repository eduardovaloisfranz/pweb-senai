<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right v-if="usuarioLogado !== null">
            <template v-slot:button-content>
              <em>Usuario: {{usuarioLogado.nome}}</em>
            </template>
            <b-dropdown-item @click="handleLogout">Deslogar-se</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown right v-else>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>Visitante</em>
            </template>
            <b-dropdown-item :to="{ name: 'Login'}">Logar-se</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    usuarioLogado() {
      return this.$store.state.usuarioLogado;
    }
  },
  methods: {
    handleLogout() {
      this.$store.commit("SETAR_USUARIO_LOGADO", null);
      sessionStorage.removeItem("token");
      alert(
        "Você não possui mais acesso a essa página, irá ser redicionado ao login"
      );
      setTimeout(() => {
        this.$router.push("/login");
      }, 1500);
    }
  }
};
</script>
<style>
</style>
