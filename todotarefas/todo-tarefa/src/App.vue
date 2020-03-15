<template>
  <div id="app">
    <statusTarefas id="statusTarefa" :porcentagem="calcularPorcentagem()"/>    
    <cadastrarTarefa @cadastrar-tarefa="cadastrarTarefa"/> 
    <listTarefas :tarefas="tarefas"/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import statusTarefas from './components/statusTarefas.vue'
import cadastrarTarefa from './components/cadastrarTarefa'
import listTarefas from './components/listTarefas.vue'

export default {
  name: 'App',  
  components: {
  //  HelloWorld
  statusTarefas,
  cadastrarTarefa,
  listTarefas
  },data(){
    return {
      tarefas: [{
        title: 'Lavar a louça',
        isCompleted: false
      },
      {
        title: 'lavar carro',
        isCompleted: true
      },{
        title: 'Pagar conta de luz',
        isCompleted: false
      }, {
        title: 'Compra frutas da semana',
        isCompleted: false
      },{
        title: 'Matricular os filhos no inglês',
        isCompleted: true
      }
      ],
      porcentagem: this.calcularPorcentagem()
    }
  },
  methods: {
      cadastrarTarefa(tarefa){             
          this.tarefas.push(tarefa);
      },      
      calcularPorcentagem(){
            //let qtdTarefas = this.tarefas.length;            
            //console.log(this.tarefas.length)
            //console.log(tarefas)
            return 90;
      }
  }
}
</script>

<style>


</style>
