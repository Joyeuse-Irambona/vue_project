<template>
    <nav id="navbar" class="navbar">
          <ul @click.prevent="handleLogout">
            <li><a class="nav-link scrollto" >Logout</a></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
    </nav>
</template>

<script>
export default {
  name:'logout',
  methods:{
    handleLogout(){
      this.$store.getters.logoutUser();
      this.$router.push('/')
    }
  }
}
</script>