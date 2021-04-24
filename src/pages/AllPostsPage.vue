<template>
    <div class="allposts">
        <div class="posts__header">
            <h2>Create new post</h2>
            <div class="posts__header__add__post">
                <img class="add__post" src="../assets/add.svg" @click="$router.push({name: 'createPost'})">
            </div>
        </div>
        <div class="post">
            <post-item
            v-for = "post in paginatedData" :key = "post.id"
            :post = "post"
            @del = "del"
            />
        </div>
        <div class="pagination">
            <button @click="prevPage">
                <img src="../assets/arrow_back_ios_new_black_24dp.svg" >
            </button>
            <p v-if="thisRevPage" >{{pageNumber-1}}/</p>
            <p class="thisPage">{{pageNumber+1}}/</p>
            <p>{{pageNumber+2}}</p>
            <button @click="nextPage">
                <img src="../assets/arrow_forward_ios_black_24dp.svg" >

            </button>
        </div>
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
            thisRevPage: false
        }
    },
    computed: {
        ...mapGetters(["allPosts"]),
        paginatedData(){
            const start = this.pageNumber * this.size,
            end = start + this.size;
            return this.allPosts.slice(start, end);
        },
        pageCount(){
            let l = this.allPosts.length,
            s = this.size;

            return Math.ceil(l/s);
        },
    },
    async mounted() {
        console.log(this.paginatedData);
        this.$store.dispatch("fetchPosts")
        this.thisPage()
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
        },
        thisPage() {
            if (this.pageNumber) {
                this.thisRevPage = true
            }

        }
    }, 
    props:{
        size:{
          type:Number,
          required:false,
          default: 5
        }
    }
}
</script>

<style scoped>
.post {
    display: flex;
    flex-direction: column;
    max-width: 800px;
}
button {
    text-align: center;
    color: rgba(52, 52, 52, 1);
    transition-duration: 200ms;
    cursor: pointer;
    font-family: 'Source Code Pro', monospace;
    background: #FFFFFF;
    box-shadow: 5px 10px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    border: none;
    outline: none;
}
.pagination {
    display: flex;
    text-align: center;

}
.pagination button {
    margin: 10px;
}
.allposts {
    min-width: 700px;
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