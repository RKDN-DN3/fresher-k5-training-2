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
          <button type="submit" class="btn btn-primary">
            Login
          </button>
           <p v-if="error" class="error">Bad login information</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data: function(){
        return{
            details:{
                email: "",
                password: ""
            },
            error: false

        }
    },
    methods:{
        login(){
            console.log("debug login")
            this.$store.dispatch('sendLogin', this.details)
            .then(() => {
          this.$router.push({ name: 'TaskList' })
        })
        }
    }
}
</script>

<style>
    .size-card-login{
        width: 40%;
        margin: 70px auto;
        
    }
</style>