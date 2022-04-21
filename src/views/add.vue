<template>
<section id="contact" class="contact">
<div class="container" >
  <div class="section-title">
    <h2>Add New Product</h2>
  </div>
    <hr />
    <div class="hero">
    <form class="form" @submit.prevent="submitHandler">
      <label>Name</label>
      <input type="text" v-model="name" />
      <label>Description</label>
      <textarea
        rows="6"
        type="text"
        v-model="description"
      />
      <label>Price</label>
      <input type="number" v-model="price"/>
      <label>Quantity</label>
      <input type="number" v-model="quantity"/>
      <button type="submit">Add Product</button>
    </form>
  </div>
</div>
</section>
</template>

<script>
import axios from "axios";
import Toasted from 'vue-toasted'
import VueProgressBar from 'vue-progressbar'
export default {
  name: "add",
  data() {
    return {
      name: "",
      description: "",
      price: "",
      quantity: "",
    };
  },

  methods: {
    async submitHandler() {
      this.$Progress.start();
      try {
        const token = localStorage.getItem("token");
          axios.defaults.headers.common["Authorization"] = "Bearer "+token;
        const response = await axios.post(
          "http://product-mgt-api.herokuapp.com/api/product",
          {
            name: this.name,
            description: this.description,
            price: this.price,
            quantity: this.quantity,
          }
          
        );

         this.$router.push('/list')
      } catch (error) {
        this.$Progress.fail();
        this.$toasted.show(error.response.data.message)
        console.log(error);
      }

             e.target.reset();
             this.$router.push({ name: 'list' }); 
    },
  },
};
</script>