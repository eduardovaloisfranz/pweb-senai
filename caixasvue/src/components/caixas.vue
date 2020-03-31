<template>
  <div>
    <v-row>
      <v-col v-for="(caixa, index) in caixas" :key="index" xs="12" sm="3">
        <v-card
          @click="exibirModal(caixa, index)"
          width="150"
          height="150"
          :color="caixa.estilo"
          class="justify-center"
        >
          <div class="d-flex justify-center align-center">
            <v-card-title height="150">{{caixa.conteudo}}</v-card-title>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col xs="12" sm="8">
        <p class="text-center">Pré visualização da nova caixa</p>
        <div class="d-flex justify-center">
          <v-card width="150" height="150" :color="caixa.estilo" class="pa-5 justify-center">
            <v-card-title class="justify-center">
              <p>{{caixa.conteudo}}</p>
            </v-card-title>
          </v-card>
        </div>

        <v-text-field v-model="caixa.conteudo" label="Digite o conteúdo da Caixa"></v-text-field>
        <v-text-field v-model="caixa.estilo" label="Digite a cor da caixa"></v-text-field>
        <v-btn @click.prevent="adicionarCaixa" color="primary">Enviar</v-btn>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-dialog
        v-model="modalCaixa"
        persistent
        max-width="500"
        transition="fab-transition"
        @keydown.esc="modalCaixa = false"
        @keydown.enter="apagarCaixa()"
      >
        <v-card>
          <div class="d-flex justify-center">
            <v-card-title class="headline">Você deseja apagar a seguinte caixa</v-card-title>
          </div>
          <div max-width="150" height="150" class="d-flex justify-center">
            <v-card width="150" height="150" :color="caixaPrevisualizada.estilo" class="pa-5">
              <v-card-title>
                <p>{{caixaPrevisualizada.conteudo}}</p>
              </v-card-title>
            </v-card>
          </div>
          <v-card-actions class="d-flex justify-center">
            <!-- <v-spacer></v-spacer> -->
            <div>
              <v-btn color="green darken-1" text @click="apagarCaixa()">Sim, Desejo</v-btn>
              <v-btn color="green darken-1" text @click="modalCaixa = false">Não, desejo</v-btn>
            </div>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      caixa: {
        id: 0,
        conteudo: "PreVisualizacao",
        estilo: "green"
      },
      modalCaixa: false,
      caixaPrevisualizada: {
        id: 0,
        conteudo: "",
        estilo: ""
      }
    };
  },
  props: {
    caixas: {
      type: Array
    }
  },
  methods: {
    adicionarCaixa() {
      const newObj = {
        id: 0,
        conteudo: this.caixa.conteudo,
        estilo: this.caixa.estilo
      };
      this.$emit("adicionar-caixa", newObj);
    },
    exibirModal(caixa, index) {
      this.modalCaixa = true;
      const { conteudo, estilo } = caixa;
      this.caixaPrevisualizada.id = index;
      this.caixaPrevisualizada.conteudo = conteudo;
      this.caixaPrevisualizada.estilo = estilo;
    },
    apagarCaixa() {
      this.modalCaixa = false;
      this.$emit("apagar-caixa", this.caixaPrevisualizada.id);
    }
  }
};
</script>

<style>
</style>