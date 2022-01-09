import { createRouter, createWebHistory } from 'vue-router'
import AboutVue from '../components/About.vue'
import WorksVue from '../components/Works.vue'
import PostsVue from '../components/Posts.vue'


const routes = [
  {
    path: '/',
    name: 'About',
    component: AboutVue
  },
  {
    path: '/works',
    name: 'Works',
    component: WorksVue
  },
  {
    path: '/posts',
    name: 'Posts',
    component: PostsVue
  },
  //{
    //path: '/',
    //name: 'About',
    //// route level code-splitting
    //// this generates a separate chunk (about.[hash].js) for this route
    //// which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  //}
]

//const baseURL =  process.env.NODE_ENV === 'production' ? '/website-vue/' : '/website-vue/';
const baseURL = import.meta.env.BASE_URL;
console.log("base : " + baseURL)

const router = createRouter({
  history: createWebHistory(baseURL),
  routes
})

export default router