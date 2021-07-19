import Vuex from 'vuex'
import Vue from 'vue'
import getters from './getters'
import mutations from './mutations'
import actions from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        newTitle:'',
        searchTet:'',
        taskData :[
            {id:1, title:'Go Market', completed: false},
            {id:2, title:'Cook food', completed:false},
            {id:3, title:'Clean up room', completed:false},
            {id:4, title:'Clean PC', completed: false},
        ]
    },
     getters,
     mutations,
     actions
})