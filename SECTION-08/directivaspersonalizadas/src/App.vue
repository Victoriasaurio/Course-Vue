<template>
  <div class="container">
    <div class="jumbotron">
      <!--Envio de modificadores - .italico.negrilla -->
      <span v-decorar:grande.italico.negrilla="{familia: 'helvetica', color: 'red'}">
        Learn Vue.js easily
      </span>
      <!--Argumento - va después de los :grande -->
      <!--Paso de valores - "'helvetica'" cadena de caracteres u objeto -->
      <hr>
      <span v-decorar-local:pequeno.italico.bold="{familia: 'serif', color: 'green'}">
        Learn Node.js easily
      </span>
    </div>
  </div>
</template>

<script>

export default {
  // Diectivas locales
  directives: {
    'decorar-local': {
      bind(el, binding) {
        el.style.fontFamily = binding.value.familia
        el.style.color = binding.value.color

        if(binding.arg === 'grande') {
          el.style.fontSize = '50px'
        }
        if(binding.arg === 'pequeno') {
          el.style.fontSize = '25px'
        }

        // Establece letra negrita e italico
        if(binding.modifiers['negrilla']) {
          el.style.fontWeight = 'bold'
        }
        if(binding.modifiers['italico']) {
          el.style.fontStyle = 'italic'
        }
      }
    }
  }
}
</script>

<style>

</style>
