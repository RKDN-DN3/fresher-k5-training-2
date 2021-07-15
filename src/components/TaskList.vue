<template>
  <div class="card size-card">
      <div class="card-header">
          Todo list
      </div>
      <b-form class="form-size">
            <add-task-vue v-on:add-task="addTasks" v-bind:tasks="tasks"/>
            <ul v-if="tasks">
                <li v-for="task in tasks" v-bind:key="task.id">
                    <task v-bind:task="task" @deleted="deleteTask" />
                </li>
            </ul>
    </b-form>
  </div>
</template>

<script>
import AddTaskVue from './AddTask.vue';
import Task from './Task.vue'
// import taskData from '../database/TaskData'

export default {
    name: 'TaskList',
    components:{
        Task,
        AddTaskVue
    },
    data(){
    return{
      newTodo :'',
      tasks: [
    {id:1, title:'Go Market', completed: false},
    {id:2, title:'Cook food', completed:false},
    {id:3, title:'Clean up room', completed:false},
    {id:4, title:'Clean PC', completed: false},
    ]
    }
    
  },
  methods:{
    deleteTask(taskid){
      console.log("taskid", taskid);
      this.tasks = this.tasks.filter(task => task.id !== taskid)
    },
    addTasks(newTask){
      console.log("new task", newTask)
        this.tasks=[...this.tasks,newTask]
    }
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