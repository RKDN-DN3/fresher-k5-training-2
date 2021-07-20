<template>
     <form class="row" @submit.prevent="addTask">
            <input class="col-8" id="newTask" :placeholder="$t('placeholder')"
                type="text" 
                :value="newTitle" 
                @change="getTask($event)"
                name="newTask"/>
            <button class="col-auto btn btn-success " type="submit" > 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg> 
                {{$t('button.btnAdd')}}
            </button>
    </form>
    
</template>

<script>
 import {mapGetters} from 'vuex'
export default {
    data(){
        return{
            newTilet: '',
        }
    },
    computed:{
        ...mapGetters([
      'newTitle', 
      ])
    },
    methods:{
        getTask(e){
            this.newTilet = e.target.value
            this.$store.dispatch('getTask', this.newTilet)
        },
        addTask(e){
            e.preventDefault();
            this.$store.dispatch('addTask', this.newTilet)
            this.$store.dispatch('clearTask')
        }
    }
}
</script>

<style>

</style>