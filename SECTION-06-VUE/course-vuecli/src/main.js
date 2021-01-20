import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// bus de eventos
export let bus = new Vue({
  methods: {
    updateContador(numeroTask) {
      this.$emit('updateContador', numeroTask)
    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
