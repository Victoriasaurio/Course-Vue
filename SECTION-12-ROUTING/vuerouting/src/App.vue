<template>
  <div id="container">
    <encabezado></encabezado>
    <div class="jumbotron">
      <router-view></router-view> <!--Contiene el componente especificado por una ruta-->
    </div>
  </div>
</template>

<script>
import Encabezado from './components/encabezado'

export default {
  components: {
    encabezado: Encabezado
  }
}
</script>

<style>

</style>
