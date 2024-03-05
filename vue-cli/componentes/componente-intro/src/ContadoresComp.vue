<template>
  <div class="contadores">
    <h1>
      Contadores
    </h1>
    <app-contador v-for="c in 5" :key="c"/>
  </div>
</template>

<script>
import ContadorComp from './ContadorComp.vue'

export default {
  components: {
    'app-contador': ContadorComp,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    adicionar() {
      this.count++;
    },
    subtrair() {
      this.count--;
    },
  }
}
</script>

<style scoped>
  div {
    border: 1px solid red;
  }
</style>
