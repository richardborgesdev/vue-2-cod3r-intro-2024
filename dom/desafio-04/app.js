new Vue({
  el: '#desafio',
  data: {
    class1: 'destaque',
    perigo: true,
    class3: '',
    class4: '',
    color5: '',
    style5: {
      width: '100px',
      height: '100px',
    },
    width: '0',
  },
  methods: {
    iniciarEfeito() {
      setInterval(() => {
        this.class1 = this.class1 == 'destaque'
          ? 'encolher'
          : 'destaque';
      }, 1000);
    },
    iniciarProgresso() {
      let valor = 0;

      const temporizador = setInterval(() => {
        valor += 5;
        this.width = `${valor}%`;

        if (valor == 100) {
          clearInterval(temporizador);
        }
      }, 500);
    },
    setPerigo(event) {
      if (event.target.value == "true") {
        this.perigo = true;
      } else {
        this.perigo = false;
      }
    }
  }
})
