import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import ProfileView from '../views/Profile.vue'
const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
