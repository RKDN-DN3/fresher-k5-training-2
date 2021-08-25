export default{
    setUserData(state, user) {

        state.userData = user;
      },

    getTask(state, data){
 
        state.taskAll =data.tasks
        state.taskData =data.data
    },
 
    addTask(state, task){
        state.taskData.push({
            id: state.taskAll[state.taskAll.length-1].id+1,
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
        state.token = token
    },
    setUser(state, user){
        
        localStorage.setItem('user',user );
        state.user = user;
    },

    signUp(state, dataUser){
        state.user = dataUser
    },
    setEmail(state, email){
        state.emailForgot= email
    }
}