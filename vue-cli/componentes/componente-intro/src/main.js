import Vue from 'vue'
import App from './App.vue'
import ContadorComp from './ContadorComp.vue'

Vue.config.productionTip = false
Vue.component('contador-comp', ContadorComp);

new Vue({
  render: h => h(App),
}).$mount('#app')
