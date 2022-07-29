import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddResume from '../views/AddResume.vue'
import EditResume from '../views/EditResume.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add',
    name: 'Add-Resume',
    component: AddResume
  },
  {
    path: '/edit/:id',
    name: 'Edit-Resume',
    component: EditResume,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
