<template>
  <div class="dark" id="app">
    <div class="hd">
      <nav class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Sign Up</router-link>
        <a href="javascript:void(0)" @click="handleClick">Logout</a>
    </nav>
  </div>
    <router-view/>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name:"App",
  methods:{
    handleClick(){
      localStorage.removeItem('token');
      this.$store.dispatch('user', null);
      this.$router.push('/')
    }
  }
}
</script>

