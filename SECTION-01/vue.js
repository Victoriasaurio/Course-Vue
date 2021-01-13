let app = new Vue({
    el: '.vue',
    data: {
        mensaje: 'Aprende Vue.js',
        src: './img/vue.png',
        primero: 0,
        segundo: 0,
        tercero: 0,
        cuarto: 0,
        suma: 0,
        nombre: 'Victoriasaurio'
    },
    methods: {
        mostrarMensaje: function() {
            return 'Hola mundo';
        }
    },
    //Computed Properties
    computed: {
        total: function() {
            return this.primero + this.segundo + this.tercero + this.cuarto;
        }
    }
})