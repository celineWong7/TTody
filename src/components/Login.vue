<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1 class="green">{{ msg }}</h1>
    <form>
      <p>用户名：<input type="text" name="username"></p>
      <p>密&emsp;码：<input type="password" name="userpwd"></p>
    </form>
    <button @click="loginFun">Login</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your TodoList'
    }
  },
  methods: {
    loginFun() {
      this.$router.push({ path: '/index'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
  margin: 50px 0 50px;
}
input {
  border-radius: 20px;
}
button {
  background-color: #42b983;
  font-size: 18px;
  color: #fff;
  border-radius: 20px;
  padding: 10px 20px;
}

</style>
