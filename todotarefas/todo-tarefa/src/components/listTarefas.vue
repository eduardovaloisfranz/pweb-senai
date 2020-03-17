<template>
  
    <!-- <v-btn text color="deep-purple accent-4" @click="testar">Concluir Tarefa</v-btn> -->

    <!-- {{key}} {{title}} {{isCompleted}} -->
    <!-- {{tarefas}} -->

  <div class="flex container">
    <div v-for="(tarefa, index) in tarefas" v-bind:key="index">
      <v-card class="mx-auto v-card-item">
        <v-card-text>          
          <p class="display-1 text--primary">Tarefa: {{tarefa.title}}</p>                    
        </v-card-text>
        <v-card-actions>
          <v-btn text color="deep-purple accent-4">Concluir Tarefa</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
  
    <!-- <p>{{this.tarefas}}</p> -->
  
</template>

<script>
export default {
  name: "listTarefas",
  props: ["tarefas"],
  data() {
    return {};
  }
};
</script>

<style scoped>
#flex{
  display: flex;
}
  #container {    
      width: 100%;
      height: 100px;
      flex-wrap: wrap;      
      margin: 0 auto;
  }

  #v-card-item{
    width: 100px;
    height: 100px;
    background-color: red;
  }
</style>