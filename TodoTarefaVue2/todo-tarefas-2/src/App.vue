<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col md="12">
          <StatusTodo :percentageTodo="percentageTodo" />
          
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>


<script>
import StatusTodo from "./components/statusTodo";

export default {
  name: "App",
  data() {
    return {
      listTodos: [
        {
          name: "Lavar a Louça",
          isCompleted: false
        },
        {
          name: "Lavar o carro",
          isCompleted: true
        },
        {
          name: "Pagar a conta de Luz",
          isCompleted: false
        },
        {
          name: "Comprar frutas da Semana",
          isCompleted: false
        },
        {
          name: "Matricular os filhos no ingles",
          isCompleted: true
        }
      ]
    };
  },
  components: {
    StatusTodo: StatusTodo
  },
  computed: {
    percentageTodo() {
      let qtdTotalTarefasFeitas = 0;
      this.listTodos.forEach(item => {
        if (item.isCompleted) {
          qtdTotalTarefasFeitas++;
        }
      });
      let qtdTotalTarefas = this.listTodos.length;
      const percentage = (qtdTotalTarefasFeitas * 100) / qtdTotalTarefas;
      return percentage;
    }
  }
};
</script>

<style scoped>
body {
  background: rgba(76, 76, 76, 1);
  background: -moz-linear-gradient(
    left,
    rgba(76, 76, 76, 1) 0%,
    rgba(89, 89, 89, 1) 0%,
    rgba(102, 102, 102, 1) 25%,
    rgba(71, 71, 71, 1) 39%,
    rgba(0, 0, 0, 1) 51%,
    rgba(0, 0, 0, 1) 54%,
    rgba(17, 17, 17, 1) 60%,
    rgba(43, 43, 43, 1) 76%,
    rgba(28, 28, 28, 1) 91%,
    rgba(19, 19, 19, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    right top,
    color-stop(0%, rgba(76, 76, 76, 1)),
    color-stop(0%, rgba(89, 89, 89, 1)),
    color-stop(25%, rgba(102, 102, 102, 1)),
    color-stop(39%, rgba(71, 71, 71, 1)),
    color-stop(51%, rgba(0, 0, 0, 1)),
    color-stop(54%, rgba(0, 0, 0, 1)),
    color-stop(60%, rgba(17, 17, 17, 1)),
    color-stop(76%, rgba(43, 43, 43, 1)),
    color-stop(91%, rgba(28, 28, 28, 1)),
    color-stop(100%, rgba(19, 19, 19, 1))
  );
  background: -webkit-linear-gradient(
    left,
    rgba(76, 76, 76, 1) 0%,
    rgba(89, 89, 89, 1) 0%,
    rgba(102, 102, 102, 1) 25%,
    rgba(71, 71, 71, 1) 39%,
    rgba(0, 0, 0, 1) 51%,
    rgba(0, 0, 0, 1) 54%,
    rgba(17, 17, 17, 1) 60%,
    rgba(43, 43, 43, 1) 76%,
    rgba(28, 28, 28, 1) 91%,
    rgba(19, 19, 19, 1) 100%
  );
  background: -o-linear-gradient(
    left,
    rgba(76, 76, 76, 1) 0%,
    rgba(89, 89, 89, 1) 0%,
    rgba(102, 102, 102, 1) 25%,
    rgba(71, 71, 71, 1) 39%,
    rgba(0, 0, 0, 1) 51%,
    rgba(0, 0, 0, 1) 54%,
    rgba(17, 17, 17, 1) 60%,
    rgba(43, 43, 43, 1) 76%,
    rgba(28, 28, 28, 1) 91%,
    rgba(19, 19, 19, 1) 100%
  );
  background: -ms-linear-gradient(
    left,
    rgba(76, 76, 76, 1) 0%,
    rgba(89, 89, 89, 1) 0%,
    rgba(102, 102, 102, 1) 25%,
    rgba(71, 71, 71, 1) 39%,
    rgba(0, 0, 0, 1) 51%,
    rgba(0, 0, 0, 1) 54%,
    rgba(17, 17, 17, 1) 60%,
    rgba(43, 43, 43, 1) 76%,
    rgba(28, 28, 28, 1) 91%,
    rgba(19, 19, 19, 1) 100%
  );
  background: linear-gradient(
    to right,
    rgba(76, 76, 76, 1) 0%,
    rgba(89, 89, 89, 1) 0%,
    rgba(102, 102, 102, 1) 25%,
    rgba(71, 71, 71, 1) 39%,
    rgba(0, 0, 0, 1) 51%,
    rgba(0, 0, 0, 1) 54%,
    rgba(17, 17, 17, 1) 60%,
    rgba(43, 43, 43, 1) 76%,
    rgba(28, 28, 28, 1) 91%,
    rgba(19, 19, 19, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4c4c4c', endColorstr='#131313', GradientType=1 );
}
</style>