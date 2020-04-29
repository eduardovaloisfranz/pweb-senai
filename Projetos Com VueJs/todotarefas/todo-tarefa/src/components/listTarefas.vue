<template>
  <!-- <v-btn text color="deep-purple accent-4" @click="testar">Concluir Tarefa</v-btn> -->

  <!-- {{key}} {{title}} {{isCompleted}} -->
  <!-- {{tarefas}} -->

  <div class="flex container">
    <div v-for="(tarefa, index) in tarefas" v-bind:key="index">
      <v-card :class="style('mx-auto v-card-item', tarefa.isCompleted)">
        <v-card-text>
          <p class="display-1 text--primary">Tarefa: {{tarefa.title}}</p>
        </v-card-text>
        <v-card-actions class="justify-space-between">
          <v-btn
            @click.stop.prevent="emitClick(index)"
            text
            color="deep-purple accent-4"
          >Concluir Tarefa</v-btn>
          <v-btn @click="excluirTarefa(index)" text color="primary">Remover tarefa</v-btn>
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
    return {
      tarefasConcluidas: this.tarefas.filter(function(el) {
        return el.isCompleted === true;
      }),
      tarefasNaoConcluidas: this.tarefas.filter(function(el) {
        return el.isCompleted === false;
      })
    };
  },
  methods: {
    emitClick(index) {
      this.$emit("emit-click", index);
    },
    style(style, isCompleted) {
      let estilo = style;
      if (isCompleted === true) {
        estilo += " green";
      } else {
        estilo += " red";
      }
      return estilo;
    },
    excluirTarefa(idx) {
      this.$emit("excluir-tarefa", idx);
    }
  }
};
</script>

<style scoped>
#flex {
  display: flex;
}
#container {
  width: 100%;
  height: 100px;
  flex-wrap: wrap;
  margin: 0 auto;
}

#v-card-item {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>