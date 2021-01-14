let app = new Vue({
    el: '.vue',
    data: {
        imagen: '../SECTION-01/img/vue.png',
        texto: "Welcome to Vue.js",
        etiqueta: "<h1>I'm <em>Victoriasaurio</em></h1>",
        mostrar: true,
        op: 2,
        hidden: false,
        paises: ['México', 'Japón', "Turquía"],
        countries: [{name:'Rusia'}, {name:'China'}, {name:"Australia"}],
        employee: {
            name: 'Victoria',
            age: 21,
            nacionality: 'Mexican',
            profession: 'Student',
            company: 'HuasTechnology',
            phone: '123-456-7890'
        }
    }
})