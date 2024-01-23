new Vue({
  el: '#desafio',
  data: {
    nome: 'Ana',
    idade: 28,
    imagemUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
  },
  methods: {
    idadeVezes3() {
      return this.idade * 3;
    },
    random() {
      return Math.random();
    }
  }
})
