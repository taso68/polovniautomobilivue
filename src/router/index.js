import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import ProfileView from '../views/Profile.vue'
import NewAdView from '../views/NewAd.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView
  },
  {
    path: "/newad",
    name: "newadd",
    component: NewAdView
  }

]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
