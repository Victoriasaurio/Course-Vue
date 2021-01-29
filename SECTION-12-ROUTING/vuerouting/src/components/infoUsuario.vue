<template>
    <div>
        <h3>Información del usuario</h3>
        <div>
            <p><strong>Nombre: </strong> {{ nombre }}</p>
            <p><strong>E-mail: </strong> {{ email }}</p>
        </div>
        <button class="btn btn-primary" @click="volver">Volver</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            nombre: '',
            email: ''
        }
    },
    // Solo es necesario cuando necesitamos actualizar información en una sub-ruta.
    // watch: { // Mira cuando $route cambia para actualizar la info.
    //     $route() {
    //         let id = this.$route.params.id
    //         this.$http.get('https://jsonplaceholder.typicode.com/users/' + id)
    //                     .then(respuesta => {
    //                         return respuesta.json()
    //                     })
    //                     .then(usuario => {
    //                         this.nombre = usuario.name
    //                         this.email = usuario.email
    //                     })
    //     }
    // },
    methods: {
        volver() {
            // this.$router.push('/usuarios')       // Obteniendo la ruta por medio de una ruta.
            this.$router.push({ name: 'usuario' }) // Obteniendo la ruta por medio del nombre.
        }
    },
    created() {
        let id = this.$route.params.id
        this.$http.get('https://jsonplaceholder.typicode.com/users/' + id)
                    .then(respuesta => {
                        return respuesta.json()
                    })
                    .then(usuario => {
                        this.nombre = usuario.name
                        this.email = usuario.email
                    })
    },
}
</script>