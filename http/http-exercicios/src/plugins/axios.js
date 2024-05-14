import Vue from 'vue';
import axios from 'axios';

// axios.defaults.baseURL = 'http://firebase_URL';

Vue.use({
  install(Vue) {
    // Vue.prototype.$http = axios;
    Vue.prototype.$http = axios.create({
      baseURL: 'http://firebase_URL',
    });

    Vue.prototype.$http.interceptors.request.use(config => {
      console.log(config.method);

      // if (config.method = 'post') {
      //   config.method = 'put';
      // }

      return config
    }, error => Promise.reject(error));

    Vue.prototype.$http.interceptors.response.use(res => {
      console.log(res);
      // const array = [];
      // for (const chave in res.data) {
      //   array.push({ id: chave, ...res.data[chave] });
      // }

      // res.data = array;
    }, error => Promise.reject(error));
  }
})
