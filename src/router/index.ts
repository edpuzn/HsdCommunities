import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from "@/views/Home.vue";
import Events from "@/views/Events.vue";
import About from "@/views/About.vue";
import Blogs from "@/views/Blogs.vue";
import Contact from "@/views/Contact.vue";
import EventDetail from "@/views/EventDetail.vue";
import Login from "@/views/Login.vue";
import Sign_Up from "@/views/Sign_Up.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/sign_up',
    name: 'sign_up',
    component: Sign_Up
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  { path: '/events/:id',
    name: "EventDetail",
    component: EventDetail,
    props: true
  },
  {
    path: '/events',
    name: 'events',
    component: Events
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: Blogs
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
