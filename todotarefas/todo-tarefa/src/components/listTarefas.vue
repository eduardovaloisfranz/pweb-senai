<template>
  <div>
    <!-- <v-btn text color="deep-purple accent-4" @click="testar">Concluir Tarefa</v-btn> -->
    
    
  <p>{{this.tarefas}}</p>

    
    <br />
    <!-- <ul>
      <li       
       :v-for="(tarefa, key) in tarefas">
        {{'Titulo Tarefa: ' + this.tarefa.title}} + {{'Id: ' + key}}
       
       </li>
    </ul>  -->
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
    
  }
};
</script>

<style>
</style>