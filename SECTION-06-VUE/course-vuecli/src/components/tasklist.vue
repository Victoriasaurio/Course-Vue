<template>
    <div class="tasklist">
        <ul class="list-group">
            <li 
                v-for="(task, index) in tasks" 
                v-bind:key="index"
                class="list-group-item " 
                v-bind:class="{finished: tasks.finished}">
                    {{task.text}}
                    <span class="check">
                        <button 
                            type="button" 
                            class="btn btn-success verde"
                            v-on:click="tasks.finished = !tasks.finished"
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
        deleteTasks(index) {
            this.tasks.splice(index,1);
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