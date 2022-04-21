<template>
  <div class="main">
    <div class="container">
      <div class="logo" >
        <h1>
          <router-link to="list" class="text">Electronics </router-link>
        </h1>
      </div >
      <div class="navbar">
          <ul >
            <li><router-link to="/" class="a">Home</router-link></li>
            <li v-if="!isLoggedIn"><router-link to="/login" class="a">Login</router-link></li>
            <li  v-if="!isLoggedIn">
              <router-link to="/signup" class="a">SignUp</router-link>
            </li>
              <li><router-link to="/team" class="a">Team</router-link></li>
            <li  v-if="isLoggedIn" @click="handleLogout"><router-link to="" class="a" >Logout</router-link></li>
          </ul >
          <i class="bi bi-list mobile-nav-toggle"></i>
      </div>
      </div>
    

    <vue-progress-bar />
    <router-view />
  </div>
</template>
<script>
import axios from "axios";
import store from "./store/index.js";
import NavLogin from "./components/items/navLogin.vue";
import NavLogout from "./components/items/navLogout.vue";

export default {
  name: "App",
  components: { NavLogin, NavLogout },

  methods: {
    handleLogout(){
      this.$router.push('/');
      this.$store.getters.logoutUser();
    }
  },

  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },


  async created() {
    const response = await axios.get(
      "http://product-mgt-api.herokuapp.com/api/users"
    );
    this.$Progress.start();
    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress;
        this.$Progress.parseMeta(meta);
      }
      this.$Progress.start();
      next();
    });
    this.$router.afterEach((to, from) => {
      this.$Progress.finish();
    });
  },
};
</script>
