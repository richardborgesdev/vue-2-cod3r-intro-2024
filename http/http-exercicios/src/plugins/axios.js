import Vue from 'vue';
import axios from 'axios';

axios.defaults.baseURL = 'http://firebase_URL';

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios;
  }
})
