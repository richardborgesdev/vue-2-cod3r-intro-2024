import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './components/InicioPage.vue';
import Menu from './components/template/Menu.vue';

Vue.use(Router);

const Usuario = () => import(/* webpackChunkName: "usuario" */ './components/usuario/UsuarioPage.vue');
const UsuarioLista = () => import(/* webpackChunkName: "usuario" */ './components/usuario/UsuarioLista.vue');
const UsuarioEditar = () => import(/* webpackChunkName: "usuario" */ './components/usuario/UsuarioEditar.vue');
const UsuarioDetalhe = () => import(/* webpackChunkName: "usuario" */ './components/usuario/UsuarioDetalhe.vue');

const router =  new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    
    if (savedPosition) {
      return savedPosition;
    }
    
    if (to.hash) {
      return {
        selector: to.hash,
      };
    }

    return { x: 0, y: 0 };
  },
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
          beforeEnter: (to, from, next) => {
            console.log('before detalhe route');
            next();
          },
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
    },
    {
      path: '*',
      redirect: '/usuario',
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log('before route');
  next();
});

export default router;
