<template>
<section id="contact" class="contact">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Update Product</h2>
        <hr />
        </div>
    <div class="bkcont">

        <form class="form" v-on:submit="updateProduct">
            <label>Name</label>
            <input type="text" name="name" v-model="name" required />
            <label>Description</label>
            <textarea rows="6" name="body" v-model="description" required></textarea>
            <label>Price</label>                    
            <input type="text" name="price" v-model="price" required />
            <label>Quantity</label>
             <input type="text" name="quantity" v-model="quantity" required />
            <button type="submit" name="submit">Update</button>
        </form>
    </div>
      </div>
    </section>
</template>

<script>
import Toasted from "vue-toasted";
import VueProgressBar from "vue-progressbar";
export default {
  data() {
    return {
      name: "",
      description: "",
      price: "",
      quantity: "",
      product: {},
    };
  },

  methods: {
    async getProduct() {
      // this.$progress.start();
      const id = this.$route.params.id;
      const token = localStorage.getItem('token');
      const res = await fetch(
        `http://product-mgt-api.herokuapp.com/api/product/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
          },
        }
      );
      const data = await res.json();
      if (res.status === 200) {
        console.log("data ", data);
        this.product = data;
        this.name = data.name;
        this.description = data.description;
        this.price = data.price;
        this.quantity = data.quantity;
      }
    },

    async updateProduct(e) {
      e.preventDefault();
      // this.$progress.start();
      const token = localStorage.getItem("token");
      const id = this.$route.params.id;
      const res = await fetch(
        `http://product-mgt-api.herokuapp.com/api/product/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
          },
          body: JSON.stringify({
            name: this.name,
            description: this.description,
            price: this.price,
            quantity: this.quantity,
          }),
        }
      );

      if (res.status === 200) {
        this.$toasted.show("Data updated");
        this.$router.push({ name: "list", params: { id: id } });
      }
    },
  },

  mounted() {
    this.getProduct();
  },
};
</script>