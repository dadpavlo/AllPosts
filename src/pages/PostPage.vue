<template>
    <div class="post__page">
        <div class="post">
            <post
            :post = 'thisPost'
            />
            <comment
            v-for = "comment in commentsOfPost" :key = "comment.id"
            :comment = "comment"
            @del = 'del'
            />
            <h3>Create new comment!</h3>
            <div class="form__comment">
                <textarea class="new__comment" rows="5" v-model="commentBody"></textarea>
                <button @click="newComment">OK</button>
            </div>
        </div>

    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import post from '../components/ThisPost.vue'
import comment from '../components/Comment.vue'
export default {
    name: 'ThisPosts',
    components: {
        post,
        comment
    },
    data() {
        return {
            commentBody: ""
        }
    },
    computed: {
        ...mapGetters(['thisPost', 'commentsOfPost'])
    },
    async mounted() {
        
        this.$store.dispatch("getPost", this.$route.params.id)
        this.$store.dispatch("Comments")
        this.$store.dispatch("getComments", this.$route.params.id)
    },
    methods: {
        ...mapActions(['getPost']),
        newComment() {
            if(this.commentBody.trim()) {
                const comment = {
                    id: Date.now(),
                    postId: parseInt(this.$route.params.id),
                    body: this.commentBody
                }
                this.$store.dispatch("createComment", comment)
            }
        },
        del(id) {
            console.log(parseInt(this.$route.params.id));
            const comment = {
                id: id,
                postId: parseInt(this.$route.params.id)
            }
            this.$store.dispatch("deleteComment", comment);
        }
    }
}
</script>

<style scoped>
h3 {
    align-self: start;
}
button {
    height: 30px;
    align-self:flex-end;
    margin: 20px;

}
.new__comment {
    flex-grow: 1;
    font-family: 'Source Code Pro', monospace;
    color: #ffffff;
    background-color: rgb(73, 73, 73);
    padding: 10px;
    outline: none;
    border: none;
    border-radius: 15px;
}
.form__comment {
    flex-direction: column;
    min-height: 50px;
    min-width: 100%;
    display: flex;
}
.post {
    display: flex;
    flex-direction: column;
    

}
.create__post {
    display: flex;
    flex-direction: column;
}

.post__page {
    padding: 80px;
    min-height: 100vh;
    background-color: rgb(37, 37, 37);
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content:center;
    color: rgb(255, 255, 255);
}

.header__user {
    height: auto;
    width: 40%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.post__user__photo img {
    padding-left: 10px;
    margin-right: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50px;
}
 
.post__user:hover {
    color: lightcoral;
}

.posts__header {
    min-width: 700px;
    align-items: center;
    display: flex;
    justify-content: space-between;
}
input.post__user__title {
    font-family: 'Source Code Pro', monospace;
    color: #ffffff;
    background-color: rgb(73, 73, 73);
    padding: 10px;
    min-width: 700px;
    border-radius: 50px;
    border: none;
    outline: none;
    margin: 10px;
    
}
input.post__user__name {
    font-family: 'Source Code Pro', monospace;
    color: #ffffff;
    background-color: rgb(73, 73, 73);
    padding: 10px;
    outline: none;
    margin: 10px;
    border: none;
    border-radius: 50px;

}
.post__user__body {
    font-family: 'Source Code Pro', monospace;
    color: #ffffff;
    background-color: rgb(73, 73, 73);
    padding: 10px;
    outline: none;
    margin: 10px;
    border: none;
    border-radius: 15px;
}
button {
    padding: 5px;
    width: 20%;
    font-size: 20px;
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
button:active {
    color: #FFFFFF;
    box-shadow: 5px 6px 4px rgba(0, 0, 0, 0.25);
    transform: translateY(4px);
}

button:hover {
    color: #FFFFFF;
    background-color: rgb(124, 124, 124);
}
</style>