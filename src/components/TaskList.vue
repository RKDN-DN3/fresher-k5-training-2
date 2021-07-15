<template>
  <div class="card size-card">
      <div class="card-header">
          Todo list
      </div>
      <b-form class="form-size">
          <b-form-row>
              <b-form-input class="col-10" id="inline-form-input-username" placeholder="Add new task todo"></b-form-input>
            <b-button class="col-2" variant="success"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg> Add Task
            </b-button>
            </b-form-row>
            <ul>
                <li v-for="task in tasks" :key="task.id">
                    <task v-bind:task="task"/>
                </li>
            </ul>
    </b-form>
  </div>
</template>

<script>
import Task from './Task.vue'
export default {
    name: 'TaskList',
    props:['tasks'],
    components:{
        Task
    }
}
</script>

<style>
    .size-card{
        width: 60%;
        margin: 50px auto;
        
    }
    .form-size{
        margin: 20px 30px;
        align-items: center;
        
    }
</style>