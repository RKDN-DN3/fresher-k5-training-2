<template>
   <div class="card size-card">
      <div class="card-header">
          Todo list
      </div>
      <b-form class="form-size">
        <div class="row">
          <div class="col-sm-6">
             <form class="row align-items-center">
                <div class="col-sm-5">
                    <input type="text" class="form-control" id="searchtext"  placeholder="Search task ..." v-model="search" >
                  </div>
                  <div class="col-sm-2">
                    <input class="form-check-input" type="radio" name="filter" id="allcheck" value="1" v-model="picked">
                      <label class="form-check-label" for="allcheck">
                      All task
                      </label>
                  </div>
                  <div class="col-auto">
                    <input class="form-check-input" type="radio" name="filter"  id="completedcheck" value="2" v-model="picked">
                      <label class="form-check-label" for="completedcheck">
                          Completed
                      </label>
                  </div>
            </form>
          </div>
          <div class="col-sm-6">
             <add-task-vue v-on:add-task="addTasks" v-bind:tasks="tasks"/>
          </div>
         
        </div>
            <hr/>
            <ul v-if="tasks">
                <li v-for="task in tasks" v-bind:key="task.id">
                    <task v-bind:task="task" @deleted="deleteTask" />
                </li>
            </ul>
    </b-form>
  </div>
</template>

<script>

export default {

    computed:{
        tasks(){
            return this.$store.getters.tasks
        }
    }
}
</script>

<style>

</style>