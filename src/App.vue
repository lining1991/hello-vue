<template>
  <div id="app">
    <Form></Form>
    <Display></Display>
  </div>
</template>
<script>
import Display from './components/Display';
import Form from './components/Form';
// import Vue from 'vue';
// Vue.use()
export default {
  components: {
    Form,
    Display,
  },
};
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
