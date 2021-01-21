<template>
  <div class="container">
    <div class="jumbotron">
      <showForm >
        <div slot="titulo">
          <h3>Sign in</h3>
        </div>
        <div slot="formulario">
          <div class="form-group">
            <label for="email-in">E-mail</label>
            <input type="email" class="form-control"
                id="email-in" placeholder="Write your E-mail"
            >
          </div>
          <div class="form-group">
              <label for="pass-in">Password</label>
              <input type="password" class="form-control"
                  id="pass-in" placeholder="Write your Password"
              >
          </div>
        </div>
        <div slot="boton">
          <button class="btn btn-primary">sign in</button>
        </div>
      </showForm>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      
    }
  },
  destroyed() { //Gancho ciclo de vida - visualización sin keep-alive
    console.log('El componente fue destruido')
  },
  activated() { //Visualizar su ciclo de vida - Componentes dinámicos con keep-alive
    console.log('Componente activado!')
  },
  deactivated() { //Visualizar su ciclo de vida - Componentes dinámicos con keep-alive
    console.log('Componente desactivado!!')  
  },
}
</script>

<style scope>
  h3 {
    color: red;
  }
</style>