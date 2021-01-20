<template>
    <div>
        <h2>{{titleMayus()}}</h2>
        <h5>Task to do: {{ numTask }} - {{numTaskOther}} - {{numeroTask}}</h5>
    </div>
</template>

<script>
import { bus } from '../main.js'

export default {
    name: 'Titulo',
    props: ['titulo','numTask', 'numTaskOther'], //Podemos pasar info como cadena.
    //{titulo: { type: String, default: 'Tasks'}}, // require: true - Se puede utilizar.
    data() {
        return {
            numeroTask: 0
        }
    },
    methods: {
        titleMayus() {
            return this.titulo.toUpperCase();
        }
    },
    //Escucha el evento
    created() {
        bus.$on('updateContador', (numeroTask) => {
            this.numeroTask = numeroTask
        })
    },
}
</script>

<style>
</style>