import Router from 'vue-router'
import Vue from 'vue'
import MainPage from '../pages/MainPage.vue'
import PostsLayout from '../pages/PostsLayout.vue'
import AllPostsPage from '../pages/AllPostsPage.vue'
import CreatePostPage from '../pages/CreatePostPage.vue'
import EditPost from '../pages/EditPost.vue'
import PostPage from '../pages/PostPage.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'mainPage',
            component: MainPage,
        },
        {
            path: '/posts',
            component: PostsLayout,
            children: [
                {
                    path: '',
                    name: 'posts',
                    component: AllPostsPage
                },
                {
                    path: '/createPost',
                    name: 'createPost',
                    component: CreatePostPage,
                },
                {
                    path: '/editPost:id',
                    name: 'editPost',
                    component: EditPost
                },
                {
                    path: '/:id',
                    name: 'post',
                    component: PostPage

                }
            ]
        }
    ]
})