<template>
  <div id="app">
 
      <navbar></navbar>
      <router-view/>
  </div>
</template>

<script>

import Navbar from './components/Header.vue'
export default {
  name: 'App',
 components:{
   Navbar
 },
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
  .wrapper{
    width: 100%;
    position: relative;
    top: 0;
    height: 100vh;
  }
  li{
    display: list-item;
    text-align: -webkit-match-parent;
  }
  ul{
    
    list-style: none;
    padding: 20px 0 0 5px 
  }
  button {
    padding: 15px;
    border: 1px solid green;
    font-size: 18px;
    margin: 15px;
}

</style>
