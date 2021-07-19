export default{
    getTask(state, task){
        state.state.newTitle = task
  
    },
    addTask(state){
        state.state.taskData.push({
            id: state.state.taskData.length +1,
            title: state.state.newTitle,
            completed: false
        })
    },
    removeTask(state, task){
        console.log(task)
        var tasks= state.state.taskData
        tasks.splice(tasks.indexOf(task), 1)
       /*  state.state.taskData.filter(task => { return task.id != taskid}) */
    },
    completeTask(state, task){
        task.completed = !task.completed
    },
    clearTask(state){
        state.state.newTask = ''
    }
}