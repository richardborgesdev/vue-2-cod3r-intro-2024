<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>
          Nome do Usuário:
          <strong>
            {{ usuarioNome }}
            {{ inverterNome() }}
          </strong>
        </p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn">Reiniciar Nome (callback)</button>

    </div>
</template>

<script>
export default {
  props: {
    usuarioNome: {
      type: String,
      // required: true,
      default: 'Anônimo',
      // default: () => {
      //   return Array(10).fill(0).join(',');
      // }
    },
    reiniciarFn: {
      type: Function,
    }
  },
  methods: {
    inverterNome() {
      return this.usuarioNome.split('').reverse().join('');
    },
    reiniciarNome() {
      this.$emit(
        'nomeMudou', 
        { 
          noveo: 'Pedro', 
          antigo: this.usuarioNome,
        },
      );
    }
  }
}
</script>

<style scoped>
  .componente {
      flex: 1;
      background-color: #ec485f;
      color: #fff;
  }
</style>
