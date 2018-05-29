import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//引入模块
import Home from '../components/home'
import UserList from '../components/userList'
import AddGoods from '../components/addGoods'
import AddShop from '../components/addShop'
import FoodList from '../components/foodList'
import OrderList from '../components/orderList'
import ShopList from '../components/shopList'
import Visitor from '../components/visitor'
import VueEdit from '../components/vueEdit'
import AdminList from '../components/adminList'
import AdminSet from '../components/adminSet' 

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
    },
    {
      path:'/userList',
      component:UserList
    },
    {
      path:'/addGoods',
      component:AddGoods
    },
    {
      path:'/foodList',
      component:FoodList
    },
    {
      path:'/visitor',
      component:Visitor
    },
    {
      path:'/vueEdit',
      component:VueEdit
    },
    {
      path:'/adminList',
      component:AdminList
    },
    {
      path:'/adminSet',
      component:AdminSet
    },
    {
      path:'/shopList',
      component:ShopList
    },
    {
      path:'/addShop',
      component:AddShop
    },
    {
      path:'/orderList',
      component:OrderList
    }
  ]
})
