<template>
    <div class="post">
        <div class="post__header" >
            <div class="header__user">
                <div class="post__user__photo">
                    <img src="../assets/account.svg">
                </div>
                <div class="post__user__name">
                    <p>{{post.user}}</p>
                </div>
            </div>
            <div class="header__edit">
                <div class="edit">
                    <img src="../assets/edit.svg" class="cursor">
                </div>
                <div class="delete">
                    <img src="../assets/delete.svg" class="cursor" @click="deletePost">
                </div>
            </div>
        </div>
        <hr>
        <h2>{{post.title}}</h2>
        <p class="post__body">{{post.body}}</p>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: 'ThisPosts',
    props: {
        post: {
        }
    },
    methods: {
        ...mapActions(['deletePost']),
        deletePost() {
            this.$emit('del', this.post.id)
        }
    }
}
</script>

<style scoped>
.post {
    transition-duration: 100ms;
    border: 1px solid #ccc;
    outline: none;
    border-radius: 5px;
    margin-bottom: 1rem;
    min-width: 700px;
    max-width: 800px;
}
.post__body{
    padding: 10px;
}
.post:hover {
    background-color: rgb(47, 47, 47);
}
.header__user {
    cursor: pointer;
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
hr {
    margin: 0px 10px 0px 10px;
    
    
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

.posts__header__add__post img{
    cursor: pointer;
    width: 35px;
    height: 35px;

}

.post__header{
    display: flex;
}

.header__edit {
    padding-right: 10px;
    height: auto;
    display: flex;
    width: 60%;
    justify-content: flex-end;
    align-items: center;
}

.cursor {
    cursor: pointer;
}

</style>