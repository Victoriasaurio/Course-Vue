import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Filtro global
Vue.filter('suspensivos', (text) => {
  //Retorna solo 10 espacio y concatena los puntos.
  return text.substring(0, 10) + ' ...' 
})

new Vue({
  render: h => h(App),
}).$mount('#app')
