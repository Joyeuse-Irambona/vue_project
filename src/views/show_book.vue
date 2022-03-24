<template>
    <div v-if="book" class="bkb">
        <h2>{{book.title}}</h2>
        <h3>{{book.author}}</h3>

        <p><strong>Summary: </strong>{{ book.summary }}</p>
        <p>{{ book.body }}</p>

        <div class="btn">
            <router-link :to="{ name: 'update', params: { id: book.id } }">Update</router-link>
            <button @click="deleteBook">Delete</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            book: {}
        }
    },

    methods: {
        async getBook() {
            const id = this.$route.params.id;
            const res = await fetch(`http://localhost:3000/book/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            if (res.status === 200) {
                this.book = await res.json();
            }
        },

        async deleteBook() {
            var sure = window.confirm("are you sure that you want to delete this book");
            if (sure) {
                const id = this.$route.params.id;
                const res = await fetch(`http://localhost:3000/book/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });

                if (res.status === 200) {
                    this.$router.push({ name: 'home' });
                }
            }
        }
    },

    mounted() {
        this.getBook();
    }
}
</script>