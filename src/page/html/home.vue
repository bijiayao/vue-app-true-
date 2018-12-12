<template>
  <div id="home">
     <user-header :title="title" v-on:titleChanged="changed($event)"></user-header>
     <user :userList="userList"></user>
     <user-footer :title="title"></user-footer>
  </div>
</template>

<script>
import user from './user'
import header from './header'
import footer from './footer'
export default {
  name: 'home',
  data(){
    return{
        title: 'hahahha',
        userList: [{
                name: '杨九郎',
                email: 'yangjiulang@qq.com',
                del: false
            },
            {
                name: '张云雷',
                email: 'zhangyunlei@qq.com',
                del: false
            },{
                name: '刘昊然',
                email: 'liuhaoran@qq.com',
                del: false
            },{
                name: '李易峰',
                email: 'liyifeng@qq.com',
                del: false
            }]
    }
  },
  methods:{
      changed: function(title){
		  this.title = title;
	  }
  },
  components: {
    user,
    "user-header": header,
    "user-footer": footer
  }
}
</script>

<style>
html{
    font-size:20px;
}
body{
    margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
}
</style>
