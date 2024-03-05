<template>
  <div class="contador">
    <span>
      {{  count }}
    </span>
    <button @click="adicionar">
      +
    </button>
    <button @click="subtrair">
      -
    </button>
    <div>child scoped style</div>
  </div>
</template>

<script>
export default {
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
  border: 1px solid blue;
}

span {
  border-bottom: 1px solid #CCC;
  height: 30px;
  padding: 5px 25px;
}

button {
  height: 30px;
  width: 30px;
  border-radius: 15px;
  background-color: coral;
  color: #fff;
  margin-left: 10px;
  outline: none;
}
</style>
