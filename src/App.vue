<template>
  <div id="app">
    <div class="wrapper">
      <task-list v-bind:tasks="tasks"/>
    </div>
  </div>
</template>

<script>


import taskData from './database/TaskData'
import TaskList from './components/TaskList.vue'

export default {
  name: 'App',
  components: {
    TaskList
  },
  data(){
    return{
      newTodo :'',
      tasks:taskData
    }
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
  .wrapper{
    width: 100%;
    position: relative;
    top: 0;
    height: 100vh;
  }
  li{
    display: list-item;
    text-align: -webkit-match-parent;
  }
  ul{
    
    list-style: none;
    padding: 20px 0 0 5px 
  }
</style>
