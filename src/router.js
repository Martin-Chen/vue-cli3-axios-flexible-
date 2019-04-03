import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
const Home = () => import("./views/Home.vue");
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        title: "首页",
      }
    }
  ]
})
