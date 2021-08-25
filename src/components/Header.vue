<template>
  <div class="header">
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">TODO APP</a>
        <form class="d-flex">
          <div v-if="loggedIn" style="color: #00000; display: inline">
            <b>Xin chào {{getUser}}</b>
            <button class="btn btn-outline-danger" type="button" value="Logout" style="margin-left: 5px" @click="logout" >LogOut</button>
          </div>
          <div v-else>
            <button class="btn btn-outline-success" type="button"><a class="nav" href="/login">Login</a></button>
            <button class="btn btn-outline-warning" type="button"><a class="nav" href="/signup">Register</a></button>
          </div>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["loggedIn", "getUser"]),
  },
  methods: {
    
    logout() {
      this.$store.dispatch("logout").then(()=>this.$router.replace('/login'));
      
    },
  },
   
};
</script>

<style>
.header {
  margin-bottom: 10px;
}
a.nav{
    color: #b797e4;
    text-decoration: none;
}
a.nav:hover{
    color: #eeecf1;
    
}
b {
    color: #eeecf1;
}
</style>
