<template>
    <div class="createPostForm">
        <div class="create__post">
            <h1>Create new post!</h1>
            <div class="post__header" >
                <div class="header__user">
                    <div class="post__user__photo">
                        <img src="../assets/account.svg">
                    </div>
                    <div class="post__user__name">
                        <input type="text" class="post__user__name"  placeholder = "Your name" v-model="userName">
                    </div>
                </div>
            </div>
            <div class="post__user__title">
                <input type="text" class="post__user__title" placeholder = "Post title" v-model="title">
            </div>
            <textarea cols="30" rows="10" class="post__user__body" placeholder = "Write something here!" v-model="body"></textarea>
            <div class="button" @click="createPost(), $router.push({name: 'posts'})" >
                <button>OK</button>
            </div>
        </div > 
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: 'ThisPosts',
    props: {
        post: {
            type: Object
        },
    },
    // data() {
    //     return {
    //         post: {
    //             id: 1,
    //             user: '',
    //             title: '',
    //             body: ''
    //         }
    //     }
    // },
    methods: {
        ...mapActions(['createPost']),
        createPost() {
            console.log('ku');
            if(this.userName.trim()) {
                const post = {
                    id: Date.now(),
                    user: this.userName,
                    title: this.title,
                    body: this.body
                }
                this.$store.dispatch("createPost", post);
            }
        }
    }
}
</script>

<style scoped>
.create__post {
    display: flex;
    flex-direction: column;
}

.createPostForm {
    height: 100vh;
    background-color: rgb(37, 37, 37);
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
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