<template>
    <div class="posts">
        <div class="posts__header">
            <h2>Create new post</h2>
            <div class="posts__header__add__post">
                <img class="add__post" src="../assets/add.svg" @click="$router.push({name: 'createPost'})">
            </div>
        </div>
        <post-item
        v-for = "post in paginatedData" :key = "post.id"
        :post = "post"
        @del = "del"
        />
        <button @click="prevPage">///</button>
        <button @click="nextPage">Next</button>
    </div>
</template>

<script>
import PostItem from '../components/PostItem'
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'AllPosts',
    components: {
        PostItem
    },
    data() {
        return {
            pageNumber: 0,
        }
    },
    computed: {
        ...mapGetters(["allPosts"]),
        paginatedData(){
            const start = this.pageNumber * this.size,
            end = start + this.size;

            console.log(start);
            console.log(end);
            return this.allPosts.slice(start, end);
        },
        pageCount(){
            let l = this.allPosts.length,
            s = this.size;
            return Math.ceil(l/s);
        }
    },
    async mounted() {
        console.log(this.paginatedData);
        this.$store.dispatch("fetchPosts")
    },
    methods: {
        ...mapActions(['deletePost']),
        del(id) {
            this.deletePost(id)

        },
        nextPage(){
         this.pageNumber++;
        },
        prevPage(){
            this.pageNumber--;
        }
    }, 
    props:{
        size:{
          type:Number,
          required:false,
          default: 10
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