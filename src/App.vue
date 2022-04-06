<template>
  <div>
    <header id="header" class="fixed-top">
      <div class="container d-flex align-items-center">
        <h1 class="logo me-auto">
          <a href="index.html">Electronics </a>
        </h1>

        <div>
          <NavLogin />
        </div>
        <div>
          <NavLogout v-if="isLoggedIn" />
        </div>
      </div>
    </header>

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
