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
        <p>
          Idade do Usuário: 
          <strong>
            {{ idade }}
          </strong>
        </p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn">Reiniciar Nome (callback)</button>

    </div>
</template>

<script>
import barramento from '@/barramento';

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
    },
    idade: Number,
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
  },
  create() {
    barramento.$on('idadeMudou', idade => {
      // this.idade = idade;
      console.log('>>>', idade);
    });
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
