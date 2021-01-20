<template>
    <div class="input-group">  
        <input 
            type="text" 
            placeholder="Write a new task"
            v-model="newTask"
            class="form-control"
            v-on:keyup.enter="addTask()"
        >
        <span class="input-group-btn">
            <button 
                type="button" 
                v-on:click="addTask()"
                class="btn btn-primary"
            >Add task</button>
        </span>
    </div>
</template>

<script>
import { bus } from '../main.js'

export default {
    name: 'newTask',
    data() {
        return {
            newTask: ''
        }
    },
    props: ['tasks', 'updateContador'],
    methods: {
        addTask() {
            let text = this.newTask.trim(); //Borra espacios al principio o final del texto
            if(text) {
                this.tasks.push({
                    text: text,
                    finished: false
                })
                //Comunicación entre componente hijo a padre 
                //this.$emit('incrementarContador', 1) //Incrementa el contador de numTask - Evento personalizado (1)
                //this.updateContador() //(2) 

                //bus.$emit('updateContador', this.tasks.length)
                bus.updateContador(this.tasks.length) //Método del bus que son comunes
            }
            this.newTask = ''; //Limpia 
        },
    }, 
    //Función qur toma los valores(longitud lista tareas) de la lista son declarlos manualmente
    // Gancho del ciclo de vida.
    created() {
        //bus.$emit('updateContador', this.tasks.length)
        bus.updateContador(this.tasks.length)
    }
}
</script>