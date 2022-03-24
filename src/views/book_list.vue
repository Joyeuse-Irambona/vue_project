<template>
    <div class="bkcont">
        <h2>Book list</h2>
        <p>You want to add book <router-link to="/add">Add new</router-link></p>
        <hr />

        <div>
            <div v-if="len">
                <div class="list" v-for="book in books" :key="book.id">         
                    <router-link  :to="{ name: 'book', params: { id: book.id } }">
                        <div class="book">
                            <h3>{{ book.title }}</h3>
                            <p>{{ book.summary }}</p>
                            <p class="auth">{{ book.author }}</p>
                        </div>
                    </router-link>
                </div>
            </div>                 

            <div v-else class="nobook">
                <h3>You have not yet add book</h3>
                <router-link to="add/">Add new Book</router-link>
            </div>

      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "home",
    data() {
        return {
            books: [],
            len: Boolean(true)
        }
    },
    methods: {
        async getdata() {
            const res = await fetch('http://localhost:3000/book', {
                method: 'GET',
                headers: {
                    'Type-Content': 'application/json'
                }
            });

            if (res.status === 200) {
                this.books = await res.json();
            }
        }
    },
    mounted() {
        this.getdata();
    }
}
</script>