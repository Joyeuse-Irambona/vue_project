<template>
<section id="contact" class="contact">
<div class="container" data-aos="fade-up">
    <div class="bkb" v-if="product" v-on="getProduct" >
        <h2>{{product.name}}</h2>
        <h3>{{product.price}}</h3>
        <h3>{{product.quantity}}</h3>

        <p><strong>Summary: </strong>{{ product.description }}</p>
        <p>{{ product.description }}</p>

        <div class="btn">
            <router-link :to="{ name: 'update', params: { id: product.id } }">Update</router-link>
            <button @click="deleteProduct(product.id)">Delete</button>
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
                const token = localStorage.getItem("token");
              axios.defaults.headers.common["Authorization"] = "Bearer " + token;
                const id = this.$route.params.id;
                const res = await fetch(`http://http://product-mgt-api.herokuapp.com/api/product/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'auth_meth': 'token'
                    },
                });
    
                console.log(await res);
                this.$toasted.show(error);
            
        },

        async deleteProduct() {
            var sure = window.confirm("are you sure that you want to delete this product");
            if (sure) {
                this.$Progress.start();
                const token = localStorage.getItem("token");
                const id = this.$route.params.id;
                const res = await fetch(`http://product-mgt-api.herokuapp.com/api/product/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                if (res.status === 200) {
                     this.$router.push({ name: 'list' });
                    console.log(error)
                }
            }
        }
    },

    mounted() {
        this.getProduct();
    }
}
</script>