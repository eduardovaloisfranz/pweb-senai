<template>
  <div>
    <v-text-field
      v-model="title"
      label="Cadastrar Tarefa"
      :rules="rules"
      hide-details="auto"
    ></v-text-field>
    <button @click="cadastrarTarefa()">Salvar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rules: [
        value => !!value || "Tarefa é requirido!.",
        value => (value && value.length >= 3) || "Minimo 3 caracteres"
      ],
     title: String()
    };
  },
  methods: {
    cadastrarTarefa() {        
      this.$emit("cadastrar-tarefa", this.title);

    }
  }
};
</script>

<style>
</style>