<template>
  <div class="login mt-5">
    <div class="card size-card-login">
      <div class="card-header">
        Login
      </div>
      <div class="card-body">
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="details.email"
              placeholder="Enter email"
            />
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
          <div>
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
import VueRouter from "vue-router";
const { isNavigationFailure, NavigationFailureType } = VueRouter;

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
  methods: {
    login() {
      console.log("debug login");
      this.$store.dispatch("sendLogin", this.details).then(() => {
        alert("Đăng nhập thành công");
        this.$router.push({ name: "TaskList" }).catch((failure) => {
          if (isNavigationFailure(failure, NavigationFailureType.redirected)) {
            failure.to.path // '/admin'
             failure.from.path // '/'
          }
        });
      });
    },
  },
};
</script>

<style>
.size-card-login {
  width: 40%;
  margin: 70px auto;
}
.reset-pwd {
  margin-left: 20px;
}
</style>
