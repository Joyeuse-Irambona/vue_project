<template>

<!-- ======= Services Section ======= -->
    <section id="services" class="services section-bg">
      <div class="container" data-aos="fade-up">

        <div  class="section-title">
          <h2 style="margin-left:200px">Product list</h2>
         
        </div>

        <p style="margin-left:50px">You want to add a product <router-link to="/add">Add new</router-link></p>
        <hr />

        <div class="">


          <div class="box">
            <div class="icon-box" style="width:100px,  margin: 20px"  v-for="product in products" :key="product.id">
              <div class="icon"><i class="bx bx-layer"></i></div>
              <div class="list" style=" display: block, width:100%">         
                    <router-link  :to="{ name: 'product', params: { id: product.id } }">
                        <div class="product">
                          <div>
                            <img src="https://www.corsair.com/corsairmedia/sys_master/productcontent/CH-9300011-NA-M65_PRO_RGB_BLK_04.png" alt="mouse corsair" class="mouse">
                          </div>
                          <div class="text">
                            <h2>{{ product.name }}</h2>
                            <h4 >${{ product.price }}</h4>
                            <p>{{ product.description }}</p>
                          </div>
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