import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { rutas } from './rutas' //Importación de las rutas

Vue.use(VueRouter)

Vue.config.productionTip = false

const enrutador = new VueRouter({
  routes: rutas
})

new Vue({
  router: enrutador,
  render: h => h(App),
}).$mount('#app')
