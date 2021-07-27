import axios from "axios"
 axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';

export default{
     getTask(context){        
        axios.get('tasks')
        .then(response=>{
            console.log("gettask api");
            context.commit('getTask' , response.data.data)
        })
        .catch(error => {
            console.log(error)
          })
    },
 
    addTask({commit}, task){
        
        axios.post('tasks',{
           title:task,
           user_id:1
        })
        commit('addTask',task)
    }, 
 /*   editTask({commit}, task){
        
    },*/
    removeTask({commit}, task){
       
       axios.delete('tasks/'+task.id) 
        commit('removeTask', task)
    },
    completeTask({commit}, task){
        console.log("task id", task.id)
        axios.put('tasks/'+task.id, {
            title: task.title,
            completed: task.completed
        })
        commit('completeTask', task) 
    },
    clearTask({commit}){
        commit('clearTask')
    }  
}