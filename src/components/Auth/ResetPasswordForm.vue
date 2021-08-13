<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-6">
        <div class="card card-default">
          <div class="card-header">New Password</div>
          <div class="card-body">
            <!-- <ul v-if="errors">
              <li v-for="error in errors" v-bind:key="error">{{ msg }}</li>
            </ul> -->
            <form autocomplete="off" @submit.prevent="resetPassword">
              <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" id="password" class="form-control" placeholder="" v-model="Pwd.password" required>
              </div>
              <div class="form-group">
                  <label for="password_confirmation">Confirm Password</label>
                  <input type="password" id="password_confirmation" class="form-control" placeholder="" v-model="Pwd.password_confirm" required>
              </div>
              <button type="submit" class="btn btn-primary">Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data() {
      return {
        Pwd:{
        token: this.$route.params.token,
        password: null,
        password_confirm: null,
        }
      }
    },
    computed:{
      ...mapGetters(['getEmailForgot'])
    },
    methods:{
      resetPassword(){
        this.email= this.getEmailForgot
        this.$store.dispatch('resetpassword',this.Pwd)

        this.$route.push('/login')
      }
    }
}
</script>

<style>

</style>