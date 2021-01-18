new Vue({
    el: '.vue',
    data: {
        contador: 0,
        contador2: 0,
        x: 0,
        y: 0,
        contador3: 0,
        contador4: 0
    },
    methods: {
        sumarUno: function() {
            this.contador += 1;
        },
        restarUno: function() {
            this.contador -= 1;
        },
        sumar2Uno: function() {
            this.contador2 += 1;
        },
        alerta: function(msj) {
            alert(msj);
        },
        mostrarUbicacion: function(evento) {
            this.x = evento.clientX; //Obtienen las coordenadas del mouse
            this.y = evento.clientY;
        },
        sumarOne: function(number) {
            this.contador3 += number;
        }
    }
})