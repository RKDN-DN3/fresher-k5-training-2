<template>
  <div class="login mt-5">
    <div class="size-card-login">
      
      <div class="card-body" style="padding: 15px">
        <form @submit.prevent="login">
          <h2 style="text-align: center; font-family: ui-rounded;">LOGIN </h2>
          <div class="form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              v-model="details.email"
              placeholder="Enter email"
            />
            <span class="error-message" v-if="emailIsInvalid"> Invalid Email</span>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              v-model="details.password"
            />
          </div>
          <div class="margin">
            <button type="submit" class="btn btn-primary">
              Login
            </button>
            <p v-if="error" class="error">Bad login information</p>
            <a class="reset-pwd" href="/forgot-password"
              >Forgot your password</a
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import VueRouter from 'vue-router'
const { isNavigationFailure, NavigationFailureType } = VueRouter
export default {
  data: function() {
    return {
      details: {
        email: "",
        password: "",
      },
      error: false,
    };
  },
  computed:{
     emailIsInvalid() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const emailRegex = new RegExp(re)
      
      return this.details.email && !emailRegex.test(this.details.email)
    }
  },

  methods: {
    login() {
      this.$store.dispatch("sendLogin", this.details)
      this.$router.push("/task-list")
      .catch((e) => {
    if (!isNavigationFailure(e, NavigationFailureType.redirected)) {
        Promise.reject(e)
    }
  })   
    },
  },
};
</script>

<style>
.size-card-login {
  background-color: #e8e8e8;
  width: 35%;
  margin: 70px auto;
  border-radius: 15px;
}
.reset-pwd {
  margin-left: 20px;
}
.margin{
  margin-top: 10px;
}
</style>
