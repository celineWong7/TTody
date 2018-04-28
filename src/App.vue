<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.green {
  color: #42b983;
}
button {
  border: 1px solid transparent;
  outline: none;
}
button:active {
  opacity: 0.8;
}
input {
  border: 1px solid #42b983;
  padding: 10px 15px;
  font-size: 16px;
  outline: none;
  color: #666;
  box-sizing: border-box;
}
</style>
