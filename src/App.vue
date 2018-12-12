<template>
  <div id="app">
	  <ul>
		  <!-- <li><router-link to="/">home</router-link></li> -->
		  <!-- <li><router-link to="/user">user</router-link></li> -->
	  </ul>
     <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
       
    }
  },
  methods:{
      
  },
  components: {
    
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
