export default{
    getTask(state, tasks){
         /*state.state.newTitle = task */
        console.log('tasks',tasks)
        state.taskData =tasks
    },
    addTask(state, task){
        console.log(task)
        state.taskData.push({
            id: state.taskData.length +1,
            title: task,
            completed: false
        })
        this.getTask
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
    
}