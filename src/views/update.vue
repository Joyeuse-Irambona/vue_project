<template>
    <div class="bkcont">
        <h2>Update Book</h2>
        <hr />

        <form class="form" v-on:submit="updateBook">
            <label>Title</label>
            <input type="text" name="title" v-model="title" required />
            <label>Author</label>
            <input type="text" name="author" v-model="author" required />
            <label>Summary</label>                    
            <input type="text" name="summary" v-model="summary" required />
            <label>Body</label>
            <textarea rows="6" name="body" v-model="description" required></textarea>
            <button type="submit" name="submit">Update</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            author: '',
            summary: '',
            description: '',
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
                this.title = await this.book.title;
                this.author = await this.book.author;
                this.summary = await this.book.summary;
                this.description = await this.book.description;
            }
        },

        async updateBook(e) {
            e.preventDefault();
            const id = this.$route.params.id;
            const res = await fetch(`http://localhost:3000/book/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: this.title,
                    author: this.author,
                    summary: this.summary,
                    description: this.description
                })
            });

            if (res.status === 200) {
                this.$router.push({ name: 'book', params: { id: id } });
            }
        }
    },

    mounted() {
        this.getBook();
    }
}
</script>