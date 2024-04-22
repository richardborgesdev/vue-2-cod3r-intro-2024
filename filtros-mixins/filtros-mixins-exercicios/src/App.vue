<template>
  <div id="app">
    <h1>Filtros & Mixins</h1>
    <hr>
    <p>
      {{ cpf | cpf | inverter }}
    </p>
    <input type="text" name="" id="" :value="cpf | cpf | inverter">
    <Frutas/>
    <ul>
      <li v-for="(fruta, index) in frutas" :key="index">
        {{ fruta }}
      </li>
    </ul>
    <input type="text" name="" id="" v-model="fruta" @keydown.enter="add">
  </div>
</template>

<script>
import Frutas from './FrutasComp.vue';
import frutasMixin from './frutasMixin';

export default {
  components: {
    Frutas,
  },
  mixins: [
    frutasMixin,
  ],
  filters: {
    cpf(value) {
      const arr = value.split('');
      arr.splice(3, 0, '.');
      arr.splice(7, 0, '.');
      arr.splice(11, 0, '-');

      return arr.join('');
    }
  },
  data() {
    return {
      cpf: '60070080090',
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}

input {
  font-size: 2.5rem;
}
</style>
