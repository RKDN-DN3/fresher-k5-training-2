export default{
    setUserData(state, user) {
        console.log("user", user)
        state.userData = user;
      },

    getTask(state, tasks){
         /*state.state.newTitle = task */
        state.taskData =tasks
    },
 
    addTask(state, task){
        /* commit('addTask', task) */
        console.log('add task debug',task),
        
        state.taskData.push({
            id: state.taskData.length +1,
            title: task,
            completed: false
        })
    },
     removeTask(state, task){
        console.log('task',task)
        var tasks= state.taskData
        tasks.splice(tasks.indexOf(task), 1)
       /*  state.state.taskData.filter(task => { return task.id != taskid}) */
    },
    completeTask(state, task){

        state.taskData.task = !task.completed
    },
    setToken(state,token){
        console.log('token',token)
        state.token = token
    },
    setUser(state, user){
        state.user = user;
    },

    signUp(state, dataUser){
        state.user = dataUser
    }
}