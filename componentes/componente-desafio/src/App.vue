<template>
  <v-app>
    <app-menu />
    <app-toolbar />
    <v-content>
      <app-carrousel />
    </v-content>
    <app-footer />
  </v-app>
</template>

<script>
import Footer from '@/components/template/Footer.vue';
import Carrousel from '@/components/widgets/Carrousel.vue';
import Toolbar from '@/components/template/Toolbar.vue';
import Menu from '@/components/template/Menu.vue';

export default {
  components: {
    appFooter: Footer,
    appCarrousel: Carrousel,
    appToolbar: Toolbar,
    appMenu: Menu,
  },
  data() {
    return { };
  }
}
</script>
