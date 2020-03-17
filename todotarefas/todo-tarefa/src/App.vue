<template>
  <v-app>
    <div id="app">
      <statusTarefas id="statusTarefa" :porcentagem="calcularPorcentagem()" />
      <cadastrarTarefa @cadastrar-tarefa="cadastrarTarefa" />

      <!-- <listTarefas :v-for="(tarefa.title, tarefa,isCompleted, key) in tarefas" :key="key" :title="tarefa.title" :isCompleted="tarefa.isCompleted" /> -->
      <list-tarefas :tarefas="tarefas" />
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
      this.tarefas.push({
        title: tarefa.title,
        isCompleted: true
      });
    },
    calcularPorcentagem() {
      console.log("oi?")     
      console.log(this.tarefas[0].title) 
      
      
         let qtdTotalTarefas = this.tarefas.length;
         let qtdTotalTarefasFeitas = 0;
         for (let tarefa in this.tarefas) {
          if (tarefa.isCompleted) {
             console.log(tarefa)
             qtdTotalTarefas++;
           }
         }
        // console.log()
         let porcentagemTarefas = (qtdTotalTarefasFeitas * 100) / qtdTotalTarefas
         console.log(porcentagemTarefas)
      return porcentagemTarefas;      
    },
    concluirTarefa(tarefa) {
      this.tarefas.splice(this.tarefas.indexOf(tarefa), 1, {
        title: tarefa.title,
        isCompleted: true
      });
    }
  }
};
</script>

<style>
</style>