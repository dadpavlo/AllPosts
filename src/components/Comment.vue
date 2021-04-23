<template>
    <div class="comments">
                <div class="body">
                    <p>{{comment.body}}</p>
                </div>
                <div class="delete">
                    <img src="../assets/clear_black_24dp.svg" class="cursor" @click="deleteComment">
                </div>
            </div>
</template>

<script>

export default {
    name: 'Comment',
    props: {
        comment: {
            type: Object
        },
    },
    methods: {
        deleteComment() {
            this.$emit('del', this.comment.id)
        }
    }
}
</script>

<style scoped>
.delete {
    margin-right: 10px;
}
.body {
    flex-grow: 1;
}
.comments {
    min-height: 20px;
    color: #000;
    background-color: #ffffff;
    border: 1px solid #ccc;
    outline: none;
    border-radius: 30px 30px 0px 30px;
    margin-bottom: 1rem;
    min-width: 200px;
    max-width: 700px;
    display: flex;
    align-items: center;
    align-self:flex-end;
}
</style>