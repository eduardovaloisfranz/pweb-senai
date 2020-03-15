<template>
  <div>
    <!-- <v-btn text color="deep-purple accent-4" @click="testar">Concluir Tarefa</v-btn> -->
    
    
  <p>{{this.tarefas}}</p>

    
    <br />
    <!-- <ul>
      <li       
       :v-for="(tarefa, key) in tarefas"
        v-bind:key= key,
        v-bind:title: tarefa.title>

      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: "listTarefas",
  props: {
    tarefas: {
      Type: Array,
      required: true
    },
    data(){
      return {
        tarefa: Object,
        key: Number
      }
    },
    methods: {
     
    }
  }
};
</script>

<style>
</style>