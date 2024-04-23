import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('inverter', function (value) {
  return value.split('').reverse().join('');
});

Vue.mixin({
  data() {
    return {
      global: 'Estou no mixin global',
    };
  },
  created() {
    console.log('created - mixin global');
  }
})

new Vue({
	render: h => h(App),
  created() {
    console.log('created - mixin instance');
  },
}).$mount('#app')
