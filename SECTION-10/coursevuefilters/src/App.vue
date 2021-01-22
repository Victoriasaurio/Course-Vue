<template>
  <div class="container">
    <div class="jumbotron">
      <span>{{ msg | mayusculas}}</span><!--Forma de aplicar un filtro-->
      <br>
      <span>{{ msg | suspensivos | mayusculas }}</span> <!--se lo aplica a lo que se encuentre a la izq-->
      <hr>
      <span>
        {{ msg }}
      </span> <!--Mensaje original- No modifica el valor real-->
      <hr>
      <span>
        {{ temperatura | aFahrenheit}}
      </span> <!--Filtro con números-->
      <!--También se puede hacer con fechas y cualquier otro tipo-->
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      msg: 'Learn Vue.js',
      temperatura: 20
    }
  },
  filters: { // Filtro local
    mayusculas(msg) {
      return msg.toUpperCase()
    },
    aFahrenheit(temperatura) {
      return (9/5 * temperatura) + 32 + ' F'
    }
  }
}
</script>

<style>

</style>
