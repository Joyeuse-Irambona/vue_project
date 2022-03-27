<template>
  <div class="dark" id="app">
      <nav class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Sign Up</router-link>
        <a href="javascript:void(0)" @click="handleClick">Logout</a>
    </nav>
    <router-view/>
  </div>
  
</template>