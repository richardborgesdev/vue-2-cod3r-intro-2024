<template>
  <div id="app" class="container-fluid">
    <h1>Animações</h1>
    <hr>
    <b-button variant="primary" class="mb-4" @click="exibir = !exibir">
      Mostrar mensagem
    </b-button>
    <transition name="fade">
      <b-alert variant="info" show v-show="exibir">
        {{ msg }}
      </b-alert>
    </transition>
    <transition name="slide" type="animation">
      <b-alert variant="info" show v-show="exibir">
        {{ msg }}
      </b-alert>
    </transition>
    <transition name="slide" type="transition" appear>
      <b-alert variant="info" show v-show="exibir">
        {{ msg }}
      </b-alert>
    </transition>
    <transition 
      enter-active-class="animate__animated animate__bounce" 
      leave-active-class="animate__animated animate__shakeX"
    >
      <b-alert variant="info" show v-show="exibir">
        {{ msg }}
      </b-alert>
    </transition>
    <hr>
    <b-select v-model="tipoAnimacao" class="mb-4">
      <option value="fade">
        Fade
      </option>
      <option value="slide">
        Slide
      </option>
    </b-select>
    <transition :name="tipoAnimacao" mode="out-in">
      <b-alert variant="info" show v-if="exibir" key="info">
        {{ msg }}
      </b-alert>
      <b-alert variant="warning" show v-else key="warning">
        {{ msg }}
      </b-alert>
    </transition>
    <hr>
    <button @click="exibirJS = !exibirJS">
      Alternar
    </button>
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div class="caixa" v-if="exibirJS"></div>
    </transition>

    <hr>
    <div class="mb-4">
      <b-button variant="primary" @click="componenteSelecionado = 'AlertaInfo'" class="mr-2">
        Info
      </b-button>
      <b-button variant="secondary" @click="componenteSelecionado = 'AlertaAdvertencia'">
        Advertencia
      </b-button>
    </div>

    <transition name="fade" mode="out-in">
      <component :is="componenteSelecionado">
      </component>
    </transition>
  </div>
</template>

<script>
import AlertaAdvertencia from './AlertaAdvertencia.vue';
import AlertaInfo from './AlertaInfo.vue';

export default {
  components: {
    AlertaAdvertencia,
    AlertaInfo,
  },
  data() {
    return {
      msg: 'Uma mensagem de informação para o usuário',
      exibir: true,
      exibirJS: true,
      tipoAnimacao: 'fade',
      larguraBase: 0,
      componenteSelecionado: 'AlertaInfo',
    }
  },
  methods: {
    animar(el, done, negativo) {
      let rodada = 1;
      const temporizador = setInterval(() => {
        const rodadaValue = rodada * 10;
        const rodadeEval = negativo
          ? -rodadaValue
          : rodadaValue;
        const novaLargura = this.larguraBase + rodadeEval;

        el.style.width = `${novaLargura}px`;
        rodada++;

        if (rodada > 30) {
          clearInterval(temporizador);
          done();
        }
      }, 20);
    },
    beforeEnter(el) {
      console.log('>>> beforeEnter');

      this.larguraBase = 0;
      el.style.width = `${this.larguraBase}px`;
    },
    enter(el, done) {
      console.log('>>> enter');

      this.animar(el, done, false);
    },
    afterEnter(el) {
      console.log('>>> afterEnter');
    },
    enterCancelled(el) {
      console.log('>>> enterCancelled');
    },
    beforeLeave(el) {
      console.log('>>> beforeLeave');

      this.larguraBase = 300;
      el.style.width = `${this.larguraBase}px`;
    },
    leave(el, done) {
      console.log('>>> leave');

      this.animar(el, done, true);
    },
    afterLeave(el) {
      console.log('>>> afterLeave');
    },
    leaveCancelled(el) {
      console.log('>>> leaveCancelled');
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.5rem;
}

.caixa {
  height: 100px;
  width: 300px;
  margin: 30px auto;
  background-color: lightgreen;
}

.fade-enter, .fade-leave-to { 
  opacity: 0;
}

.fade-enter-active, .fade-leave-active { 
  transition: opacity 2s;
}

@keyframes slide-in {
  from { transform: translateY(40px);}
  to { transform: translateY(0px);}
}

@keyframes slide-out {
  from { transform: translateY(0px);}
  to { transform: translateY(40px);}
}

.slide-enter-active {
  animation: slide-in 2s ease;
  transition: opacity 2s;
}

.slide-leave-active {
  animation: slide-out 2s ease;
  transition: opacity 2s;
}

.slide-enter, .slide-leave-to { 
  opacity: 0;
}
</style>
