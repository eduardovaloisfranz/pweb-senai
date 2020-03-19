<template>
  <v-app>
    <div id="app">
      <statusTarefas id="statusTarefa" :porcentagem="calcularPorcentagem()" />
      <cadastrarTarefa @cadastrar-tarefa="cadastrarTarefa" />

      <!-- <listTarefas :v-for="(tarefa.title, tarefa,isCompleted, key) in tarefas" :key="key" :title="tarefa.title" :isCompleted="tarefa.isCompleted" /> -->
      <list-tarefas :tarefas="tarefas" @emit-click="concluirTarefa"/>
      <!-- <listTarefas :title="tarefas[0].title"/> -->
    </div>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import statusTarefas from "./components/statusTarefas.vue";
import cadastrarTarefa from "./components/cadastrarTarefa";
import listTarefas from "./components/listTarefas.vue";
export default {
  name: "App",
  components: {
    //  HelloWorld
    statusTarefas,
    cadastrarTarefa,
    listTarefas
  },
  data() {
    return {
      tarefas: [
        {          
          title: "Lavar a louça",
          isCompleted: false
        },
        {
          title: "lavar carro",
          isCompleted: true
        },
        {
          title: "Pagar conta de luz",
          isCompleted: false
        },
        {
          title: "Compra frutas da semana",
          isCompleted: false
        },
        {
          title: "Fazer coisas",
          isCompleted: true
        },
        {
          title: "kkkkisso ai",
          isCompleted: true
        },
        {
          title: "sem ideia",
          isCompleted: true
        },
        {
          title: "quero testar",
          isCompleted: true
        },
        {
          title: "so mais algum",
          isCompleted: true
        },
        {
          title: "Acabooou",
          isCompleted: true
        }
      ],
      porcentagem: this.calcularPorcentagem()
    };
  },
  methods: {
    cadastrarTarefa(tarefa) {          
      this.tarefas.push(tarefa)         
      console.log(this.tarefas)
        
      
    },
    calcularPorcentagem: function() {        
        let qtdTotalTarefas = 0;
        let qtdTotalTarefasFeitas = 0;       
        for(let index in this.tarefas){
         qtdTotalTarefas++;
         if(this.tarefas[index].isCompleted === true){
           qtdTotalTarefasFeitas++;
         }
      }
      let porcentagemTarefas = (qtdTotalTarefasFeitas * 100) / qtdTotalTarefas      
      return porcentagemTarefas;      
    },
    concluirTarefa(index){     
      //console.log(index)
      
      //console.log(this.tarefas[index].title)
      let novoObjeto = this.tarefas[index];
      if(this.tarefas[index].isCompleted){
        novoObjeto.isCompleted = false;
      }else{
        novoObjeto.isCompleted = true
      }
     
      
      //console.log(novoObjeto)      
      
      this.tarefas.splice(index, 1, novoObjeto)
      
    }
  }
};
</script>

<style>
</style>