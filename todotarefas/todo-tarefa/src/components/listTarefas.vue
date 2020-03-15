<template>
  <div>
    <v-btn text color="deep-purple accent-4" @click="testar">Concluir Tarefa</v-btn>
    <p>{{this.tarefas.length}}</p>
    <!-- <li :v-for="tarefa in tarefas">
      <ul>{{this.tarefa[tarefa].title}}</ul>
    </li> -->
  </div>
</template>

<script>
export default {
  name: "listTarefas",
  props: {
    tarefas: {
      Type: Array,
      required: true
    }
  },
  methods: {
    testar() {
      console.log("oi");
      for (let tarefa in this.tarefas) {
        console.log("Titulo:" + this.tarefas[tarefa].title + "Key: " + tarefa);
      }
    }
  }
};
</script>

<style>


</style>