<template>
  <div class="container">
    <div class="jumbotron">
      <button class="btn btn-primary signin"
              @click="componetSelect = 'signin'"
      >sign in</button>
      <button class="btn btn-primary"
              @click="componetSelect = 'changepass'"
      >change password</button>

      <!--Componentes dinámicos-->
      <!--v-bind - Directiva de enlace - Pone el componente predeterminado-->
      <keep-alive> <!--Mantiene los datos ingresados en el formulario - Propiedad únicamente para VUE-->
        <component v-bind:is="componetSelect"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import showForm from './components/showForm'
import changePass from './components/changePass'
import signIn from './components/signIn'

export default {
  components: {
    showform: showForm,
    changepass: changePass,
    signin: signIn
  },
  data() {
    return {
      componetSelect: 'signin'
    }
  },
  
}
</script>

<style scope>
  .signin {
    margin-right: 5px;
  }
</style>
