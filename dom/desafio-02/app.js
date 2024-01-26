new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
      showAlert() {
        alert('alert!!');
      },
      keyDownValue(event) {
        this.valor = event.target.value;
      },
      keyDownOnEnter(event) {
        this.valor = event.target.value;
      },
    },
})
