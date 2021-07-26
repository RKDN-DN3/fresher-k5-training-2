import axios from "axios"
 axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';

export default{
    /*  getTask(context){        
        axios.get('tasks')
        .then(response=>{
            console.log("gettask api");
            context.commit('getTask' , response.data.data)
        })
        .catch(error => {
            console.log(error)
          })
    },
 
   addTask(context, task){
       axios.post('tasks',{
           title:task,
           user_id:1
        })
       .then(response => {

        context.commit('addTask', response.data.data)
        console.log("repo")
        })
        .catch(error => {   
            console.log(error)
        })
        
    }, */
 /*   editTask({commit}, task){
        commit('editTask', task)
    },
    removeTask({commit}, task){
        commit('removeTask', task)
    },
    completeTask({commit}, task){
        commit('completeTask', task)
    },*/
    clearTask({commit}){
        commit('clearTask')
    }  
}