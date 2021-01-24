<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <!-- v:bind - Envío de info a los componentes-->
      <Titulo 
        :titulo="titulo"
        :numTask="numTask"
        :numTaskOther="numTaskOther"
      ></Titulo>
      <newTask 
        :tasks="tasks"
        v-on:incrementarContador="numTask += $event"
        :updateContador="updateContador"
      ></newTask>
      <TaskList v-bind:tasks="tasks"></TaskList>
    </div>
  </div>
</template>

<script>
import Titulo from './components/title-list';
import newTask from './components/newtask';
import TaskList from './components/tasklist';

require('dotenv').config()

export default {
  name: 'App',
  components: {
    Titulo,
    newTask,
    TaskList    
  },
  data() {
    return {
      titulo: 'Task list',
      numTask: 3,
      numTaskOther: 3,
      tasks: [],
    }
  },
  created() {
    this.$http.get(process.env.VUE_APP_URL_CONECTION + '.json') // Dentro de comillas debe ir la URL de nuestra base de datos
              .then(res => {
                return res.json()
              })
              .then(resJson => {
                console.log(resJson)
                for(let id in resJson) {
                  let task = {
                    id: id,
                    text: resJson[id].text,
                    finished: resJson[id].finished
                  }
                  this.tasks.push(task)
                }
              })
  },
  methods: { // Otra forma de comunicar los componentes (2) función que se usa como propiedad
    updateContador() {
      this.numTaskOther++;
    }
  }
}
</script>
