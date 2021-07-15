<template>
   <form class="row" @submit="addTask">
            <input class="col-10" id="title" placeholder="Add new task todo"
                type="text" v-model="title" name="title"/>
            <button class="col-2 btn btn-success " type="submit" > 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg> 
                Add Task
            </button>
    </form>
</template>

<script>


export default {
   data(){
       return{
           title:''
       }
   },
   props:['tasks'],

    methods: {
        addTask(e){
            e.preventDefault();
            const newTask={
                id: this.tasks?.lenght+1 ,
                title: this.title,
                completed: false
            }
            console.log("tassk", newTask)
            this.$emit('add-task',newTask);
            this.title = '';
        }
    }
}
</script>

<style>

</style>