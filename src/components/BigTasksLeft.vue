<template>
  <div class="sidebar">
    <div class="tille">
        <h4 style="color: #fff">VUE TODO</h4>
    </div>
    <div class="tasks">
      <ul>
        <a style="display: inline"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16" style="margin-right: 5px">
          <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
          <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
          </svg>Tasks
        </a>
        <div >
          <input v-model="newTodo" @keyup.enter="addTodo" type="text" placeholder="New tasks go here..." autofocus>
        </div>
        <ul>
          <li>
                  
          </li>
        </ul>
         
        </ul>
    </div>
  </div>
</template>

<script>
export default {
   name: 'BigTasks'
}
</script>

<style>
 .sidebar{
    background-color: #67c8e2 ;
    max-height:100% ;
    height: 100%;
    width: 330px;
    overflow: auto;
    background-size: cover;
    position: absolute;

    
  }
  .tille{
    padding: 10px 5px;
    margin: 0 30px;
    border-bottom: 1px solid rgb(87, 143, 160) ;
    text-align: center;
  }
  .tasks{
    margin: 15px 20px;
  }
  .iconsize{
    text-align: center;
    width: 34px;
    height: 34px;
  }
  .controls {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around; 
 
}
</style>