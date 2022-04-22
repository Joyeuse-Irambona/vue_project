<template>
    <section id="contact" class="contact">
      <div class="container" >
      <div class="showp" style="background:white" v-if="product" >
        <h2>{{product.name}}</h2>
        <hr/>
        <p>Summary:{{ product.description }}</p>
        <h3> Price:${{product.price}}</h3>
        <h3>Quantity:{{product.quantity}}</h3>

        <div class="shwp">
            <router-link :to="{ name: 'update', params: { id: product.id } }" class="text" >Update</router-link>
            <button @click="deleteProduct()" style="background:rgb(85, 156, 156); text-decoration: none; padding:40px,width: 40px">Delete</button>
        </div>
    </div>
     </div>
   </section>
</template>

<script>
import axios from 'axios'
import VueProgressBar from 'vue-progressbar'
import Toasted from 'vue-toasted'
export default {
    data() {
        return {
            product: {}
        }
    },

    methods: {
        async getProduct() {
            this.$Progress.start();
            var token = localStorage.getItem("token");
            const id = this.$route.params.id;
            const res = await fetch(`http://product-mgt-api.herokuapp.com/api/product/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + token
                }
            });

            const data = await res.json();
            if (res.status == 200) {
                this.product = data;
            }
        },

        async deleteProduct() {
             this.$Progress.start();
            var sure = window.confirm("are you sure that you want to delete this product");
            if (sure) {
                
                var token = localStorage.getItem("token");
                const id = this.$route.params.id;
                const res = await fetch(`http://product-mgt-api.herokuapp.com/api/product/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + token
                    }
                });

                const data = await res.json();
                    this.$toasted.show("deleted successful");
                    this.$router.push('/list');
            }
        }
    },

   mounted () {
        this.getProduct();
    }
}
</script>