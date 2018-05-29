<template>
  <div id="app">
  <!-- 侧边栏 -->
    <div style="height:100%;">
      <el-row class="tac" style="min-height:100%;">
        <el-col :span="4" style="min-height:100%; background-color: #324057">
          <el-menu
            default-active="/home"
            class="el-menu-vertical-demo"
            background-color="#48576a"
            text-color="#fff"
            router>
            <el-menu-item index="/home"><i class="el-icon-menu"></i>首页</el-menu-item>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-document"></i>数据管理</template>
              <el-menu-item index="userList">用户列表</el-menu-item>
              <el-menu-item index="shopList">商家列表</el-menu-item>
              <el-menu-item index="foodList">食品列表</el-menu-item>
              <el-menu-item index="orderList">订单列表</el-menu-item>
              <el-menu-item index="adminList">管理员列表</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><i class="el-icon-plus"></i>添加数据</template>
              <el-menu-item index="addShop">添加商铺</el-menu-item>
              <el-menu-item index="addGoods">添加商品</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title"><i class="el-icon-star-on"></i>图表</template>
              <el-menu-item index="visitor">用户分布</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title"><i class="el-icon-edit"></i>编辑</template>
              <el-menu-item index="vueEdit">文本编辑</el-menu-item>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title"><i class="el-icon-setting"></i>设置</template>
              <el-menu-item index="adminSet">管理员设置</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
        
        <el-col :span="20">
          <!-- 顶部面包屑导航 -->
          <div class="brandwrap">
            <el-breadcrumb separator=">">
              <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
              <el-breadcrumb-item>活动列表</el-breadcrumb-item>
              <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <!-- 路由 -->
          <div class="main">
            <router-view/>
          </div>
        </el-col>
      </el-row>
    </div>
      
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin:0;
  padding: 0;
}
::-webkit-scrollbar {
    width: 0px;
}

.brandwrap {
  height: 60px;
  padding-left: 20px;
  background-color:#EFF2F7;
}
.el-breadcrumb {
  height: 100%;
  line-height: 60px;
}
/* 主体内容区,高度100%,溢出滚动 */
.main {
  padding: 20px;
  height: 100%;
  overflow: auto;
}

</style>
