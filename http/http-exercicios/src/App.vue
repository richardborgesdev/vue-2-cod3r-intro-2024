<template>
  <div id="app" class="container">
    <h1>HTTP com Axios</h1>
    <b-card>
      <b-form-group label="Nome:">
        <b-form-input type="text" size="lg" v-model="usuario.nome" placeholder="Informe o nome" />
        <b-form-input type="email" size="lg" v-model="usuario.email" placeholder="Informe o email" />
      </b-form-group>
      <hr>
      <b-button @click.prevent="salvar" size="lg" variant="primary">
        Salvar
      </b-button>
      <b-button @click.privent="obterUsuarios" size="lg" variant="success" class="ml-2">
        Obter Usuários
      </b-button>
    </b-card>
    <b-list-group>
      <b-list-item v-for="(usuario, id) in usuarios" :key="id">
        <strong>
          Nome:
        </strong>
        {{ usuario.nome }}
        <br>
        <strong>
          E-mail:
        </strong>
        {{ usuario.email }}
        <strong>
          ID:
        </strong>
        {{ id }}
        <br>
      </b-list-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuarios: [],
      usuario: {
        nome: '',
        email: '',
      },
    };
  },
  // created() {
  //   this.$http
  //   .post(
  //     'usuarios.json', {
  //       nome: 'Maria',
  //       email: 'maria_maria@gmail.com',
  //     }
  //   )
  //   .then(res => console.log(res));
  // }
  methods: {
    salvar() {
      console.log(this.usuario);
      this.$http
        .post('usuarios.json', this.usuario)
        .then(resp => {
          this.usuario.name = '';
          this.usuario.email = '';
        });
    },
    obterUsuarios() {
      this.$http
        .get('usuarios.json')
        .then(res => {
          this.usuarios = res.data;
        })
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
