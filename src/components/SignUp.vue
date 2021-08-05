<template>
  <div class="container" style="max-width: 500px; text-align: left">
    <div class="card ">
      <div class="card-header"><h3>SignUp</h3></div>
      <div class="card-body">
        <form @submit.prevent="signUp">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              name="name"
              :class="{ 'is-invalid': isSubmitted && $v.userForm.name.$error }"
              v-model="userForm.name"
            />
            <div
              v-if="isSubmitted && !$v.userForm.name.required"
              class="invalid-feedback"
            >
              Name field is required
            </div>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              :class="{ 'is-invalid': isSubmitted && $v.userForm.email.$error }"
              v-model="userForm.email"
            />
            <div
              v-if="isSubmitted && !$v.userForm.email.required"
              class="invalid-feedback"
            >
              <span v-if="!$v.userForm.email.required"
                >Email field is required</span
              >
              <span v-if="!$v.userForm.email.email"
                >Please provide valid email</span
              >
            </div>
          </div>
          <div class="form-group">
            <label for="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              class="form-control"
              :class="{ 'is-invalid': isSubmitted && $v.userForm.phone.$error }"
              v-model="userForm.phone"
            />
            <div
              v-if="isSubmitted && $v.userForm.phone.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.userForm.phone.required"
                >Mobile field is required</span
              >
            </div>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              class="form-control"
              :class="{
                'is-invalid': isSubmitted && $v.userForm.password.$error,
              }"
              v-model="userForm.password"
            />
            <div
              v-if="isSubmitted && $v.userForm.password.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.userForm.password.required"
                >Password field is required</span
              >
              <span v-if="!$v.userForm.password.minLength"
                >Password should be at least 5 characters long</span
              >
            </div>
          </div>

          <div class="form-group">
            <label for="confirmPassword">Confirm Password</label>
            <input
              type="password"
              v-model="userForm.confirmPassword"
              id="confirmPassword"
              name="confirmPassword"
              class="form-control"
              :class="{
                'is-invalid': isSubmitted && $v.userForm.confirmPassword.$error,
              }"
            />
            <div
              v-if="isSubmitted && $v.userForm.confirmPassword.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.userForm.confirmPassword.required"
                >Confirm Password field is required</span
              >
              <span v-else-if="!$v.userForm.confirmPassword.sameAsPassword"
                >Passwords should be matched</span
              >
            </div>
          </div>
          <button type="submit" class="btn btn-primary btn-block" style="margin: 10px 0">
              Register
            </button>
          
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {
  required,
  email,
  maxLength,
  minLength,
  sameAs,
} from "vuelidate/lib/validators";
export default {
  data: function() {
    return {
      userForm: {
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      },
      isSubmitted: false,
    };
  },
  validations: {
    userForm: {
      name: {
        required,
      },
      email: {
        required,
        email,
      },
      phone: {
        required,
        maxLength: maxLength(10),
        minLength: minLength(10),
      },
      password: {
        required,
        minLength: minLength(8),
      },
      confirmPassword: {
        required,
        sameAsPassword: sameAs("password"),
      },
    },
  },
  methods: {
    signUp(e) {
      e.preventDefault()
      this.isSubmitted =true
      this.$v.$touch();
      if(this.$v.$invalid){
        return
      }
      else{
        this.$store.dispatch('register', this.userForm)
      }
      console.log(this.userForm)
      
    },
  },
};
</script>

<style></style>
