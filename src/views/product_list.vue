<template>

<!-- ======= Services Section ======= -->
    <section id="services" class="services section-bg">
      <div class="container" data-aos="fade-up">

        <div style="color: white" class="section-title">
          <h2 style="color: white">Product list</h2>
         
        </div>

        <p style="color: white">You want to add a product <router-link to="/add">Add new</router-link></p>
        <hr />

        <div class="">


          <div style="width: 100%; flex-wrap: wrap" class="col-xl-3 col-md-6 d-flex  justify-content-space-between mt-4 mt-md-0 " data-aos="zoom-in" data-aos-delay="400">
            <div class="icon-box" style="width:100px,  margin: 20px"  v-for="product in products" :key="product.id">
              <div class="icon"><i class="bx bx-layer"></i></div>
              <div class="list" style=" display: block, width:100%">         
                    <router-link  :to="{ name: 'product', params: { id: product.id } }">
                        <div class="product">
                            <h3>{{ product.name }}</h3>
                            <p>{{ product.price }}</p>
                            <p class="auth">{{ product.description }}</p>
                        </div>
                    </router-link>
              </div>    
            </div>
          </div>

        </div>

      </div>
    </section><!-- End Services Section -->

</template>

<script>
import axios from 'axios'
export default {
    name: "home",
    data() {
        return {
                products: [],
            len: Boolean(true)
        }
    },
    methods: {
        async getdata() {
             const token = localStorage.getItem("token");
          axios.defaults.headers.common["Authorization"] = "Bearer "+token;
            const res = await fetch('http://product-mgt-api.herokuapp.com/api/product', {
                method: 'GET',
                headers: {
                    'Type-Content': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (res.status === 200) {
                this.products = await res.json();
                this.$router.push('/list')

            }
        }
    },
    mounted() {
        this.getdata();
    }
}
</script>