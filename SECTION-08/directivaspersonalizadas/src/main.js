import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Nueva Directiva personalizada - GLOBALMENTE
//  - binding - Contiene el valor que se esta pasando desde la directiva
Vue.directive('decorar', { // vnode
  bind(el, binding) {
    el.style.fontFamily = binding.value.familia
    el.style.color = binding.value.color

    if(binding.arg === 'grande') {
      el.style.fontSize = '50px'
    }
    if(binding.arg === 'pequeno') {
      el.style.fontSize = '10px'
    }

    // Establece letra negrita e italico
    if(binding.modifiers['negrilla']) {
      el.style.fontWeight = 'bold'
    }
    if(binding.modifiers['italico']) {
      el.style.fontStyle = 'italic'
    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
