<template>
  <div id="">
    <div id="" class="">
      <h1 class="dark--text text-center">Tarefas
        
      </h1>
    </div>
    <br>
   <v-progress-linear
      height="40"
      :value="porcentagem"
      striped
      color="lime"      
    >
    <span class="white--text">{{porcentagem + '%'}}</span>
    </v-progress-linear>
  </div>
</template>

<script>
export default {
  name: "tarefas",
  props: {    
    porcentagem: Number()
  }
};
</script>

<style scoped>
.container {
  width: 80%;
  height: 30%;
  padding-top: 20%;
  background-color: red;

  flex-direction: row;
}



.center {
  justify-content: center;
}
</style>