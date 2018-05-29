import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//引入模块
import Home from '../components/home'

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      directive:'/home'
    },
    {
      path:'/home',
      component:Home
    }
  ]
})
