<template>
  <div class="usuario-editar">
    <h3>
      Usuário Editar
    </h3>
    <p>
      <strong>
        Código:
      </strong>
      {{ id }}
    </p>
    <p>
      <strong>
        Completo:
      </strong>
      {{ $route.query.completo ? 'sim' : 'não' }}
    </p>
    <p>
      <strong>
        Língua:
      </strong>
      {{ $route.query.lingua }}
    </p>
    <button primario @click="confirmou = true">
      Confirmar
    </button>
    <div id="rodape">
      <h3>
        Rodapé
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      confirmou: false,
    };
  },
  beforeRouteLeave(to, from, next) {
    console.log('>>> beforeRouteLeave');
    if (this.confirmou) {
      next();
    } else {
      if (confirm('Tem certeza?')) {
          next();
      } else {
        next(false);
      }
    }
  }
}
</script>

<style>
#rodape {
  margin-top: 1000px;
}
</style>
