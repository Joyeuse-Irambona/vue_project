<template>
    <div class="bkcont">
        <h2>Sign Up</h2>
        <form class="form" @submit.prevent="submitHandler()">
            <div v-if="error" class=" alert alert-danger" role="alert">
        {{error}}
      </div>
            <label>Name</label>
            <input type="text" name="name" placeholder="Enter your name" v-model="name" required />
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter your email" v-model="email" required /> 
            <label>Password</label>                  
            <input type="password" name="password" placeholder="Enter your email" v-model="password" required />
            <label>Confirm password</label>
            <input type="password" name="password" placeholder="Confirm your password" v-model="password_confirmation" required/>
            <button type="submit" name="submit">Sign up</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: "register",
    data() {
        return{
            name:"",
            email:"",
            password:"",
            ConfirmPassword:"",
            error: ""

        }
    },
    methods : {
         async submitHandler(){
          try {
              const response= await axios.post('http://product-v1.herokuapp.com/api/register', {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation

          });
          this.$router.push('/login')
          } catch (error) {
              this.error = 'error occurs';
          }

          
          
        }
    }
}
</script>
