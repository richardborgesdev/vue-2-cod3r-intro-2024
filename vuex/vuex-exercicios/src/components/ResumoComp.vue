<template>
  <ds-painel titulo="Resumo" roxo>
    <div class="resumo">
      <span>Total: <strong>{{ total | dinheiro }}</strong></span>
      <hr>
      <button>Finalizar!</button>
    </div>
  </ds-painel>
</template>

<script>
export default {
  computed: {
    total() {
      return this.$store.getters.valoTotal;
    },
    produtos() {
      return this.$store.state.produtos;
    },
  },
  data() {
    return {};
  }
}
</script>

<style>
table {
  width: 100%;
}

td {
  border-top: 1px solid #EEE;
  width: 33%;
}
</style>
