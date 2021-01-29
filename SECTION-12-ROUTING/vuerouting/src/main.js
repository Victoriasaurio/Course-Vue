import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { rutas } from './rutas' //Importación de las rutas

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.config.productionTip = false

const enrutador = new VueRouter({
  routes: rutas,
  mode: 'history' //Eliminación del #
})

new Vue({
  router: enrutador,
  render: h => h(App),
}).$mount('#app')

// Para utilizar el mode: 'history' en producción se deben realizar cambios en el servidor para que arroje siempre index.html