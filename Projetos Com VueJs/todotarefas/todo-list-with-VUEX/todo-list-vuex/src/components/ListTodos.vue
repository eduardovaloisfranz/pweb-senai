<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12" sm="12" md="12" lg="12" class="d-flex flex-wrap pt-3 justify-content-center">
        <b-card
          bg-variant="primary"
          text-variant="white"
          style="width: 200px; height: max-content; "
          v-for="(todo, idx) in listOfTodos"
          :key="todo.id"
          class="m-3"
          :class="{completed : todo.isCompleted, pending: !todo.isCompleted}"
        >
          <div class="d-flex justify-content-end">
            <i
              class="rounded-circle bg-dark text-center"
              style="width: 25px; height: 25px;"
              @click="handleModal(todo, idx)"
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
    <b-modal v-model="showModal" title="Options about your todo">
      <h1 class="h1 text-center">There is your options</h1>
      <h2 class="h2 text-center">What you want?</h2>
      <div class="pt-3 d-flex justify-content-between">
        <b-button variant="danger" @click="handleRemoveTodo">Remove it?</b-button>
        <h2 class="h3">or</h2>
        <b-button
          v-if="selectedTodo.isCompleted === true"
          variant="info"
          @click="handleFinishTodo"
        >Remake</b-button>
        <b-button v-else variant="success" @click="handleFinishTodo">Finish it</b-button>
      </div>
      <template v-slot:modal-footer>
        <div class="d-flex justify-content-center">
          <b-button @click="showModal = false">Close modal</b-button>
        </div>
      </template>
    </b-modal>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "listTodos",
  data() {
    return {
      showModal: false,
      selectedTodo: ""
    };
  },
  methods: {
    ...mapActions(["finishTodo", "removeTodo"]),
    async handleFinishTodo() {
      let confirm = "";
      await this.$bvModal
        .msgBoxConfirm("Are you sure?")
        .then(value => {
          confirm = value;
        })
        .catch(err => {
          console.log(err);
        });

      if (confirm) {
        this.finishTodo(this.selectedTodo);
        this.showModal = false;
        this.selectedTodo = "";
      }
    },
    handleModal(selectedTodo, idx) {
      this.showModal = !this.showModal;
      this.selectedTodo = selectedTodo;
      this.selectedTodo.idx = idx;
    },
    async handleRemoveTodo() {
      let confirm = "";
      await this.$bvModal
        .msgBoxConfirm("Are you sure?")
        .then(value => {
          confirm = value;
        })
        .catch(err => {
          console.log(err);
        });

      if (confirm) {
        console.log(this.selectedTodo.idx);
        this.removeTodo(this.selectedTodo.idx);
        this.showModal = false;
        this.selectedTodo = "";
      }
    }
  },
  computed: {
    ...mapGetters(["listOfTodos"])
  }
};
</script>

<style scoped>
.pending {
  background: red;
}
.completed {
  background: green;
}
</style>