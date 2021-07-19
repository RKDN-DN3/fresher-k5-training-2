export default{
    getTask(state, task){
        state.state.newTitle = task
  
    },
    addTask(state){
        console.log('state',state.state)
        state.state.taskData.push({
            id: state.state.taskData.length +1,
            title: state.state.newTitle,
            completed: false
        })
    },
    removeTask(state, task){
        var tasks = state.tasks
        tasks.splice(tasks.indexOf(task), 1)
        
    },
    completeTask(state, task){
        task.completed = !task.completed
    },
    clearTask(state){
        state.newTask = ''
    }
}