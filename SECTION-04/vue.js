let data = {
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
    newTask: ''
}

//data dentro de un componente se usa como función y retorna un obj.
Vue.component('tittle', {
    template: '<h2>{{title}}</h2>',
    data: function() {
        return { title: '- Task list -' }
    }
})

Vue.component('add-new-task', {
    template: `
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
    </div>`,
    data: function() { //Obtiene el data que se encuentra arriba
        return data;
    },
    methods: {
        addTask: function() {
            let text = this.newTask.trim(); //Borra espacios al principio o final del texto
            if(text) {
                this.tasks.push({
                    text: text,
                    finished: false
                })
            }
            this.newTask = ''; //Limpia 
        }
    }
})

Vue.component('task-list', {
    template: `
    <ul class="list-group">
        <li 
            v-for="(task, indice) in tasks" 
            class="list-group-item " 
            v-bind:class="{finished: tasks.finished}">
                {{task.text}}
                <span class="check">
                    <button 
                        type="button" 
                        class="btn btn-success"
                        v-on:click="tasks.finished = !tasks.finished"
                    ><i class="fas fa-check"></i></button>

                    <button 
                        type="button" 
                        class="btn btn-danger"
                        v-on:click="delete(indice)"
                    ><i class="fas fa-times"></i></button>
            </span>
        </li>
    </ul> 
    `,
    data: function() {
        return data;
    },
    methods: {
        delete: function(indice) {
            this.tasks.splice(indice, 1);
        }
    }
})

let app = new Vue({
    el: ".app",
    data: data, //Obtiene el data de la función
    methods: {
        
    },
})