<template>
    <div>
        <p>Lista de usuarios</p>
        <ul class="List-group">
            <router-link tag="li" 
                :to="{ name: 'infoUsuario', params: { id: usuario.id }}"
                class="List-group-item" 
                v-for="usuario in usuarios" :key="usuario">
                {{ usuario.name }}
            </router-link>
        </ul>
        <!--sub-ruta - info-->
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            id: this.$route.params.id, //$route - Es el enrutador
            usuarios: {}
        }
    },
    created() {
        this.$http.get('https://jsonplaceholder.typicode.com/users')
                    .then(respuesta => {
                        return respuesta.json()
                    })
                    .then(usuarios => {
                        this.usuarios = usuarios
                    })
    },
}
</script>