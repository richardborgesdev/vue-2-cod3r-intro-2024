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
    <div class="rodape">
      <h3>

      </h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
}
</script>

<style>
#rodape {
  margin-top: 1000px;
}
</style>
