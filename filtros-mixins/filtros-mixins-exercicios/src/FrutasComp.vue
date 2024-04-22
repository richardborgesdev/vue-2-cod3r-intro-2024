<template>
  <div>
    <ul>
      <li v-for="(fruta, index) in frutas" :key="index">
        {{ fruta }}
      </li>
    </ul>
    <input type="text" name="" id="" v-model="fruta" @keydown.enter="add">
    <hr>
  </div>
</template>

<script>
import frutasMixin from './frutasMixin';

export default {
  mixins: [
    frutasMixin,
  ],
}
</script>
