import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './components/InicioPage.vue';
import Usuario from './components/usuario/UsuarioPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Inicio,
    },
    {
      path: '/usuario/:id',
      component: Usuario,
      props: true,
    },
  ],
});
