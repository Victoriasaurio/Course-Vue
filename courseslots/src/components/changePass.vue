<template>
  <div class="container">
    <div class="jumbotron">
      <showForm >
        <div slot="titulo">
          <h3>Change password</h3>
        </div>
        <div slot="formulario">
          <div class="form-group">
            <label for="email-in">E-mail</label>
            <input type="email" class="form-control"
                id="email-in" placeholder="Write your E-mail"
            >
          </div>
        </div>
        <div slot="boton">
          <button class="btn btn-primary">change password</button>
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
  
}
</script>

<style scope>
  h3 {
    color: red;
  }
</style>