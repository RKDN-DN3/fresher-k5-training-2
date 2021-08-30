<template>
<div>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item href="/">TODO APP</b-nav-item>

      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">JA</b-dropdown-item>
        <b-dropdown-item href="#">VI</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
     <form class="d-flex"  style="position: absolute; right: 15px">
            <div v-if="loggedIn" style="color: #00000; display: inline">
              <b>Xin chào {{ getUser }}</b>
              <button
                class="btn btn-outline-danger"
                type="button"
                value="Logout"
                style="margin-left: 5px"
                @click="logout"
              >
                LogOut
              </button>
            </div>
            <div v-else>
              <button class="btn btn-outline-success btn-header" type="button">
                <a class="nav" href="/login">Login</a>
              </button>
              <button class="btn btn-outline-warning btn-header" type="button">
                <a class="nav" href="/signup">Register</a>
              </button>
            </div>
          </form>
  </b-navbar>
</div>
 <!--  <div class="header">
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">TODO APP</a>
        <div class="collapses navbar-collapses">
          <div class=" navbar-nav" style="position: relative; left: 30px" v-show="loggedIn">
            <router-link to="/task-list" class="nav-link"
              >Task List</router-link
            >
          </div>
          <form class="d-flex"  style="position: absolute; right: 15px">
            <div v-if="loggedIn" style="color: #00000; display: inline">
              <b>Xin chào {{ getUser }}</b>
              <button
                class="btn btn-outline-danger"
                type="button"
                value="Logout"
                style="margin-left: 5px"
                @click="logout"
              >
                LogOut
              </button>
            </div>
            <div v-else>
              <button class="btn btn-outline-success btn-header" type="button">
                <a class="nav" href="/login">Login</a>
              </button>
              <button class="btn btn-outline-warning btn-header" type="button">
                <a class="nav" href="/signup">Register</a>
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  </div> -->
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["loggedIn", "getUser"]),
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => this.$router.replace("/login"));
    },
  },
};
</script>

<style>
.header {
  margin-bottom: 10px;
}
a.nav {
  color: #b797e4;
  text-decoration: none;
}
a.nav:hover {
  color: #eeecf1;
}
b {
  color: #eeecf1;
}
.collapses {
  display: inherit;
}
.navbar-collapses {
  flex-basis: 50%;
  flex-grow: 1;
  align-items: center;
}
.btn-header{
  margin-right: 5px;
}
</style>
