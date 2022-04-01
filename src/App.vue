<template>
<div>
  <!-- ======= Header ======= -->
    <header id="header" class="fixed-top">
      <div class="container d-flex align-items-center">
        <h1 class="logo me-auto"><a href="index.html">Electronics</a></h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

        <NavLogin/>
        <NavLogout />
        <!-- .navbar -->
      </div>
    </header>
    <!-- End Header -->
    <vue-progress-bar />
    <router-view />
</div>
  <!-- <div>
    <div>
      <nav class="nav">
        
      </nav>
      
    </div>
    
  </div> -->
</template>
<script>
import axios from 'axios';
import NavLogin from './components/items/navLogin.vue';
import NavLogout from './components/items/navLogout.vue';

export default {
name:'App',  
components:{NavLogin,NavLogout},
      data(){
        return{
          token: '',
          setTokenLogin:false,
          setTokenLogout:true
        }
      },

  methods:{
getToken(){
  this.token = localStorage.getItem()
},

   handleLogout(){
        localStorage.removeItem('token');
        this.$router.push('/');
      }
      
   
  },


  mounted() {
    this.getToken();
    this.$Progress.finish();
  },


  async created() {
    const response = await axios.get('http://product-mgt-api.herokuapp.com/api/users');
    this.$store.dispatch('token', response.data);

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
