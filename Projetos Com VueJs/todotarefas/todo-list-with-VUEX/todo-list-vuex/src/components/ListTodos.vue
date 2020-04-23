<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12" sm="12" md="12" lg="12" class="d-flex flex-wrap pt-3 justify-content-center">
        <b-card
          bg-variant="primary"
          text-variant="white"
          style="width: 200px; height: max-content; "
          v-for="(todo) in listOfTodos"
          :key="todo.id"
          class="m-3"
          :class="todo.isCompleted === true ? 'bg-success' : 'bg-danger'"
        >
          <div class="d-flex justify-content-end">
            <i
              class="rounded-circle bg-dark text-center"
              style="width: 25px; height: 25px;"
              @click="concluirTodo(todo.id)"
            >x</i>
          </div>
          <b-card-text class="text-center">
            <p v-if="todo.isCompleted === true">
              <del>{{todo.title}}</del>
            </p>
            <p v-else-if="todo.isCompleted === false">{{todo.title}}</p>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "listTodos",
  computed: {
    ...mapGetters(["listOfTodos"])
  },
  methods: {
    ...mapActions(["concluirTodo"])
  }
};
</script>

<style>
</style>