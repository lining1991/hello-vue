<template>
  <div class="page">
    <div id="nav">
      	<router-link to="/list" class="tab">
    		    <i class="iconfont icon-list-search"></i><br>列表
      	</router-link>
      	<router-link to="/done" class="tab">
			      <i class="iconfont icon-done"></i><br>已完成
      	</router-link>
      	<router-link to="/calendar" class="tab">
			      <i class="iconfont icon-calendar2"></i><br>日历
		    </router-link>
      	<router-link to="/mine" class="tab">
            <i class="iconfont icon-me"></i><br>关于
        </router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
import axios from 'axios';
export default {
	beforeMount () {
		axios.get('/mock/list').then( res => {
            console.log(res.data);
            this.$store.commit('init', {
                data: res.data
            });
        });
	}
}
</script>
<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  background: #eee;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.page {
  height: 100vh;
  box-sizing: border-box;
  padding-bottom: 50px;
}
#nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  box-shadow: 0 0 5px 2px rgba(0,0,0,.1);
  background: #fff;
  .tab {
    flex: 1;
    text-align: center;
    line-height: 24px;
  }
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
