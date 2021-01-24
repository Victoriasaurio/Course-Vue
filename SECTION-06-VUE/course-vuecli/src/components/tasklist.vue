<template>
    <div class="tasklist">
        <ul class="list-group">
            <li 
                v-for="(task, index) in tasks" 
                v-bind:key="index"
                class="list-group-item " 
                v-bind:class="{finished: task.finished}">
                    {{task.text}}
                    <span class="check">
                        <button 
                            type="button" 
                            class="btn btn-success verde"
                            v-on:click="estadoTask(index)"
                        ><i class="fas fa-check"></i></button>

                        <button 
                            type="button" 
                            class="btn btn-danger "
                            v-on:click="deleteTasks(index)"
                        ><i class="fas fa-times"></i></button>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'TaskList',
    props: ['tasks'],
    methods: {
        estadoTask(index) {
            let finish = this.tasks[index].finished = !this.tasks[index].finished
            let id = this.tasks[index].id

            this.$http.patch(process.env.VUE_APP_URL_CONECTION + '/' + id + '.json', {
                finished: finish
            })
            .then(res => {
                console.log(res)
            })
        },
        deleteTasks(index) {
            let id = this.tasks[index].id
            this.tasks.splice(index,1);

            this.$http.delete(process.env.VUE_APP_URL_CONECTION + '/' + id + '.json')
                        .then(res => {
                            console.log(res)
                        })
        }
    }
}
</script>

<style scope> 
/*
    - scope aplica los estilos solo para este archivo.
    - podemos tener dos <style> uno con scope y otro sin scope.
*/
    .check {
        float: right;
    }
    .verde {
        margin-right: 10px
    }
    .finished {
        color: gray;
        text-decoration: line-through;
    }
</style> 