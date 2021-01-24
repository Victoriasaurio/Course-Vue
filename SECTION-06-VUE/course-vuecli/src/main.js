import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
require('dotenv').config()

Vue.config.productionTip = false
Vue.use(VueResource)

// Evita Utilizar la URL en cada archivo necesario.
Vue.http.options.root = process.env.VUE_APP_URL_CONECTION

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
