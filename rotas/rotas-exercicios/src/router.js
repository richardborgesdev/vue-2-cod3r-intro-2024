import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './components/InicioPage.vue';
import Usuario from './components/usuario/UsuarioPage.vue';
import UsuarioLista from './components/usuario/UsuarioLista.vue';
import UsuarioEditar from './components/usuario/UsuarioEditar.vue';
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe.vue';
import Menu from './components/template/Menu.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      // component: Inicio,
      name: 'inicio',
      components: {
        default: Inicio,
        menu: Menu,
      },
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
          component: UsuarioEditar,
          props: true,
          name: 'editarUsuario',
        },
      ],
    },
    {
      path: '/redirecionar',
      redirect: '/usuario',
    }
  ],
});
