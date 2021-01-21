<template>
    <form class="form">
        <!-- 
            Muestran la info que se manda desde app.vue 
            Si no existe un nombre para el slot tomará el otro slot que no esta definido
        -->
        <slot name="titulo"></slot>
        <slot name="formulario"></slot>
        <slot name="boton"></slot>
    </form>
</template>

<script>
export default {
    
}
</script>

<style scope> 
    
</style>