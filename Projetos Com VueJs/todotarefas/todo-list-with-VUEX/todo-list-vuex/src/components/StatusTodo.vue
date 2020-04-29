<template>
  <b-container>
    <b-row>
      <b-col cols="12" sm="12" md="12" lg="12">
        <h2 class="lead text-center h2">Todos</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" sm="12" md="12" lg="12">
        <b-progress max="100" height="2rem">
          <b-progress-bar :value="percentageTodoCompleted">
            Progress:
            <strong>{{ percentageTodoCompleted.toFixed(2) }} %</strong>
          </b-progress-bar>
        </b-progress>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" sm="12" md="12" lg="12" class="d-flex justify-content-center pt-3">
        <div style="width: 300px;" class="d-flex flex-wrap">
          <b-form-input
            class="border border-danger"
            style="width: 250px;"
            v-model="todo.title"
            placeholder="Enter the title for this Todo"
          ></b-form-input>
          <b-button
            class="border border-danger"
            style="25px;"
            variant="info"
            @click.prevent="addTodo(todo)"
          >+</b-button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "StatusVue",
  data() {
    return {
      todo: {
        id: 0,
        title: "",
        isCompleted: false
      }
    };
  },
  computed: {
    ...mapGetters(["percentageTodoCompleted", "totalOfTodos"])
  },
  methods: {
    ...mapActions(["addTodo"])
  }
};
</script>

<style>
</style>