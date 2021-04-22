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
            const res = await axios.post('http://localhost:3000/posts/', data)
                commit("updatePosts", res)
        }, 
    async deletePost({commit}, id) {
            const res = await axios.delete('http://localhost:3000/posts/' + id)
            commit("updatePosts", res)

        }
    },
    state: {
        posts: []
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        },
        createPost(state, post) {
            state.posts = post
        },
        deletePost(state, post) {
            
            state.posts = post
        }
    },
    getters: {
        allPosts(state) {
            return state.posts
        }
    }
})