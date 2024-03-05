import Vue from 'vue'
import App from './App.vue'
import ContadoresComp from './ContadoresComp.vue'

Vue.config.productionTip = false
Vue.component('contadores-comp', ContadoresComp);

new Vue({
  render: h => h(App),
}).$mount('#app')
