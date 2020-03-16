<template>
  <div>
    <!-- <v-btn text color="deep-purple accent-4" @click="testar">Concluir Tarefa</v-btn> -->

    <!-- {{key}} {{title}} {{isCompleted}} -->
    {{ title}}
    <!-- <p>{{this.tarefas}}</p> -->
  </div>
</template>

<script>
export default {
  name: "listTarefas",
  props: [    
    {
      key: Number(),
      tarefa: {
        title: String(),
        isCompleted: Boolean()
      }    
    
  }    
  ],
    data() {
        return {
          
        }
    
    } 
    
  };
</script>

<style>
</style>