<template>
  <div v-if="task" class="row">
        <div class="col-md-10" v-bind:class="{'checkcomplete':task.completed}">
           <!--  <input type="checkbox" :id="task.id" v-model="task.completed" class="checkcomplete"/> -->
            <P v-on:click="markComplete">{{task.title}}</P>
        </div>
        
        <button class="col-auto btn btn-danger" variant="danger" type="button"
             @click="$emit('deleted', task)"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
            </svg>
        </button>
    </div>
</template>

<script>
export default {
 props:["task"],
    methods:{
        markComplete(){
            this.task.completed = !this.task.completed
            console.log("status",this.task.title,this.task.completed)
        },
        complete(task){
                this.$store.dispatch('completeTask', task)
            }
    },
}
</script>

<style>
    .checkcomplete{
        font-weight: bold;
        text-decoration:line-through ;
    }
</style>