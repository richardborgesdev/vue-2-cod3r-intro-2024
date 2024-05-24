import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './components/InicioPage.vue';
import Usuario from './components/usuario/UsuarioPage.vue';
import UsuarioLista from './components/usuario/UsuarioLista.vue';
import UsuarioEditar from './components/usuario/UsuarioEditar.vue';
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Inicio,
    },
    {
      path: '/usuario',
      component: Usuario,
      props: true,
      children: [
        {
          path: '', 
          component: UsuarioLista,
        },
        {
          path: ':id', 
          component: UsuarioDetalhe, 
          props: true,
        },
        {
          path: ':id/editar', 
          component: UsuarioDetalhe,
          props: true,
        },
      ],
    },
  ],
});
