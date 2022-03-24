<template>
    <div class="bkcont">
        <h2>Add New Book</h2>
        <hr />

        <form class="form" v-on:submit="submitHandler">
            <label>Title</label>
            <input type="text" name="title" v-model="title" required />
            <label>Author</label>
            <input type="text" name="author" v-model="author" required />
            <label>Summary</label>                    
            <input type="text" name="summary" v-model="summary" required />
            <label>Body</label>
            <textarea rows="6" name="body" v-model="description" required></textarea>
            <button type="submit" name="submit">Add Book</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "add",
    data() {
        return {
            title: "",
            author: "",
            summary: "",
            description: ""
        }
    },

    methods : {
        async submitHandler(e) {
            e.preventDefault();
            const re = await fetch('http://localhost:3000/book', {
                method: 'POST',
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

            if (re.status === 201) {
                console.log('data sent');
            }
            else {
                console.log('fail to send data');
            }
            e.target.reset();
            this.$router.push({ name: 'home' });
        }
    },


}
</script>