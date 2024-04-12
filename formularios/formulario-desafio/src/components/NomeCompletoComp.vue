<template>
  <div>
    <Rotulo nome="Nome">
      <input type="text" name="" id="" :value="value.nome" @input="alterarNome">
    </Rotulo>
    <Rotulo nome="Sobrenome">
      <input type="text" name="" id="" :value="value.sobrenome" @input="alterarSobrenome">
    </Rotulo>
  </div>
</template>

<script>
import Rotulo from './RotuloComp.vue'

export default { 
  name: 'NomeCompletoComp',
  components: { 
    Rotulo, 
  },
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  methods: {
    alterarNome(event) {
      this.$emit(
        'input', 
        { 
          nome: event.target.value, 
          sobrenome: this.value.sobrenome, 
        },
      );
    },
    alterarSobrenome(event) {
      this.$emit(
        'input', 
        { 
          nome: this.value.name, 
          sobrenome: event.target.value, 
        },
      );
    },
  }
}
</script>
