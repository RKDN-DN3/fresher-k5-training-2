export default{
    getTask(state, task){
        state.newTask = task
    },
    addTask(state){
        state.tasks.push({
            body: state.newTask,
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