<template>
  <div>
    <StatusTodo />
    <ListTodos />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  created() {
    //if (localStorage.todos === "undefined") {
    //      localStorage.todos = JSON.stringify(this.$store.state.todos);
    //  } else {
    //this.$store.commit("SETAR_ARRAY", JSON.parse(localStorage.todos));
    //}
    //console.log(JSON.parse(localStorage.todos));
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  }
};
</script>

<style>
</style>
