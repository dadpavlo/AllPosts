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
                // state.thisPost = []
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
            
        }
    },
    state: {
        posts: [],
        thisPost: []
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
        }
    },
    getters: {
        allPosts(state) {
            return state.posts
        },
        thisPost(state) {
            return state.thisPost
        }
    
    }
})