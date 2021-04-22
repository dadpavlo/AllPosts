<template>
    <div class="posts">
        <div class="posts__header">
            <h2>Create new post</h2>
            <div class="posts__header__add__post">
                <img class="add__post" src="../assets/add.svg" @click="$router.push({name: 'createPost'})">
            </div>
        </div>
        <this-posts
        v-for = "post in allPosts" :key = "post.id"
        :post = "post"
        @del = "del"
        />
    </div>
</template>

<script>
import ThisPosts from '../components/ThisPost'
import { mapGetters, mapActions, mapState } from "vuex";

export default {
    name: 'AllPosts',
    components: {
        ThisPosts
    },
    computed: {
        ...mapState({
            posts: state => state.posts.posts
        }),
        ...mapGetters(["allPosts"])
    },
    async mounted() {
        this.$store.dispatch("fetchPosts")
    },
    methods: {
        ...mapActions(['deletePost']),
        del(id) {
            this.deletePost(id)
            this.$store.dispatch("fetchPosts")

        }
    }
}
</script>

<style scoped>
.posts {
    max-height: 100%;
    min-height: 100vh;
    background-color: rgb(37, 37, 37);
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: rgb(255, 255, 255);
    padding-top: 80px;
}

.posts__header {
    min-width: 700px;
    align-items: center;
    display: flex;
    justify-content: space-between;
}

.add__post {
    cursor: pointer;
    width: 35px;
    height: 35px;
}
</style>