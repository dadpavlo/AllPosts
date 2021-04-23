import axios from 'axios'
export default ({
    actions: {
        async fetchPosts({commit}) {
            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:3000/posts')
                    .then(response => {
                        commit("updatePosts", response.data);
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
                }
            )
        }, 
        async createPost({commit}, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post('http://localhost:3000/posts/', data)
                    .then(response => {
                        commit("createPost", data);
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
                },            
            )
        }, 
        async deletePost({commit}, id) {
        return new Promise((resolve, reject) => {
            axios
                .delete('http://localhost:3000/posts/' + id)
                .then(response => {
                    commit("deletePost", id)
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
            },
        )
        },
        async getPost({commit, state}, postId) {
            for (let i = 0; i < state.posts.length; i++) {
                if (state.posts[i].id == postId)
                commit("getPost", state.posts[i])

            }
        },
        async updatePost(_ , post) {
            console.log(post.id);
            return new Promise((resolve, reject) => {
                axios
                .put('http://localhost:3000/posts/' + post.id, post)
                .then(response => {
                    this.dispatch("fetchPosts")
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
                },            
            )
            
        },
        async Comments({commit}) {
            return new Promise((resolve, reject) => {
                axios
                    .get('http://localhost:3000/comments')
                    .then(response => {
                        commit("updateComments", response.data);
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
                }
            )
        },
        async getComments({commit, state}, id) {
            state.thisComments = []
            for (let i = 0; i < state.comments.length; i++) {
                if (state.comments[i].postId == id)
                commit("getComments", state.comments[i])

            }
        },
        async createComment({commit}, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post('http://localhost:3000/comments/', data)
                    .then(response => {
                        commit("createComment", data);
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
                },            
            )
        },
        async deleteComment({commit}, comment) {
            console.log('&&&', comment.postId);
            return new Promise((resolve, reject) => {
                axios
                    .delete('http://localhost:3000/comments/' + comment.id)
                    .then(response => {
                        console.log('post1', comment.postId);
                        commit("deleteComment", comment)
                        resolve(response);
                    })
                    .catch(error => {
                        reject(error);
                    });
                },
            )
            }, 
    },
    state: {
        posts: [],
        thisPost: [],
        comments: [],
        thisComments: []
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        },
        createPost(state, post) {
            state.posts.push(post)
        },
        deletePost(state, id) {
            state.posts = state.posts.filter(t => t.id !== id);
        },
        getPost(state, post) {
            state.thisPost = post
        },
        updateComments(state, comments) {
            state.comments = comments
        },
        getComments(state, comment) {
            state.thisComments.push(comment)
        },
        createComment(state, comment) {
            state.comments.push(comment)
            this.dispatch("getComments", comment.postId)
        },
        deleteComment(state, comment) {
            console.log('postid', comment.postId);
            state.comments = state.comments.filter(t => t.id !== comment.id);
            this.dispatch("getComments", comment.postId)
        },

    },
    getters: {
        allPosts(state) {
            return state.posts
        },
        thisPost(state) {
            return state.thisPost
        },
        // getComments(state) {
        //     return state.comments
        // },
        commentsOfPost(state) {
            return state.thisComments
        }
    
    }
})