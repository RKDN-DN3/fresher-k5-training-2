<template>
    <div>
        <div class="flag">
            <button v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
                <flag :iso="entry.flag" v-bind:squared=false /> {{entry.title}}
            </button>
        </div>
        <div class="card size-card">
            <div class="card-header">
                <h4>{{$t('listTitle')}}</h4>
            </div>
            <b-form class="form-size">
                <div class="row">
                <div class="col-sm-6">
                    <form class="row align-items-center">
                        <!-- <div class="col-sm-5">
                            <input type="text" class="form-control" id="searchtext"  placeholder="Search task ..." v-model="search" >
                        </div>
                        <div class="col-sm-2">
                            <input class="form-check-input" type="radio" name="filter" id="allcheck" value="1" v-model="picked">
                            <label class="form-check-label" for="allcheck">
                            All task
                            </label>
                        </div> -->
                        <div class="col-sm-3">
                            <!-- <input class="form-check-input" type="radio" name="filter"  id="completedcheck" value="2" v-model="picked">
                            <label class="form-check-label" for="completedcheck">
                                Completed
                            </label> -->
                            <button class="col-auto btn btn-success " type="button" @click="isActive = !isActive" > 
                                    {{$t('button.btnCompleted')}}
                                </button>
                        </div>
                    </form>
                </div>
                <div class="col-sm-6">
                    <add-task />
                </div>
                
                </div>
                    <hr/>
                    <ul v-if="isActive== false">
                        <li v-for="task in tasks" v-bind:key="task.id">
                            <task v-bind:task="task" @deleted="deleteTask"/>
                        </li>
                    </ul>
                    <ul v-else>
                        <li v-for="task in searchTask" v-bind:key="task.id">
                            <task v-bind:task="task" @deleted="deleteTask"/>
                        </li>
                    </ul>
            </b-form>
        </div>
    </div>
   
</template>

<script>
import Task from './Task.vue';
import AddTask from './AddTask.vue'
 import {mapGetters} from 'vuex'
 import i18n from '@/plugins/i18n';


export default {
    components:{
        AddTask,
        Task
       
    },
    data(){
        return{
            isActive: false,
            languages: [
                { flag: 'us', language: 'en', title: 'English' },
                { flag: 'jp', language: 'jp', title: '日本' },
                { flag: 'vn', language: 'vi', title: 'Tiếng Việt' }
            ]

        }
    },
   
    computed:{
        ...mapGetters([
        'tasks', 
        ]),
        ...mapGetters([
        'searchTask', 
        ])
    },
    methods:{
        deleteTask(task){
            this.$store.dispatch('removeTask', task)
        },
         changeLocale(locale) {
                i18n.locale = locale;
            }
    }
}
</script>

<style>
 .size-card{
        width: 60%;
        margin: 50px auto;
        
    }
    .form-size{
        margin: 20px 30px;
        align-items: center;
        
    }
    .flag{
        width:  50%;
        margin-left: 70%;
    }
    .flag button{
        width: 130px;
        height: 50px;
        align-items: center;
        border-radius:15px ;
        margin: 0 2px;
    }
    .flag span{
       font-size: 15px;
    }
    h4{
        color: rgba(19, 14, 14, 0.795);
        font-weight: 16px;
    }
</style>