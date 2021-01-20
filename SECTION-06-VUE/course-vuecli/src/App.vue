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
      tasks: [
        {
          text: 'Learn Vue.js',
          finished: false
        },
        {
          text: 'Learn Angular 2',
          finished: false
        },
        {
          text: 'Learn Ionic 2',
          finished: false
        }
      ],
    }
  },
  methods: { // Otra forma de comunicar los componentes (2) función que se usa como propiedad
    updateContador() {
      this.numTaskOther++;
    }
  }
}
</script>
