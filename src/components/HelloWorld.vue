<template>
   <div>
      <div>
        <button v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
            <flag :iso="entry.flag" v-bind:squared=false /> {{entry.title}}
        </button>
    </div>
       <div class="main">
           <input type="text" :placeholder="$t('placeholder')">
           <br>
           <span>{{$t('welcomeMsg')}}</span>
           <br>
           <button>{{$t('button')}}</button>
       </div>
    </div>
</template>

<script>
import i18n from '@/plugins/i18n';

export default {
    data(){
        return{
            languages: [
                { flag: 'us', language: 'en', title: 'English' },
                { flag: 'jp', language: 'jp', title: '日本' },
                { flag: 'vn', language: 'vi', title: 'Tiếng Việt' }
            ]
        }
    },
     methods: {
            changeLocale(locale) {
                console.log(locale);
                i18n.locale = locale;
            }
        }
}
</script>

<style>
 .main{
    margin: 50px auto;
    align-items: center;
 }
</style>