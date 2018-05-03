<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1 class="green">{{ msg }}</h1>
    <form>
      <p>用户名：<input v-model="name" type="text" name="username"></p>
      <p>密&emsp;码：<input v-model="password" @keyup.enter="loginFun" type="password" name="userpwd"></p>
    </form>
    <button @click="loginFun">Login</button>
  </div>
</template>

<script>
import { getData } from './js/axios-data.js'
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your TodoList',
      name: '',
      password: ''
    }
  },
  methods: {
    loginFun() {
      getData(this, this.checkUser, 'http://localhost:3000/accounts')
    },
    checkUser(users) {
      // users 对象数组
      for(var i=0; i<users.length; i++){
        var o = users[i]
        if (this.name == o.name && this.password == o.password) {
          alert("登录成功！")
          this.$router.push({ path: '/index'})
          return
        }
        alert("用户名或密码不正确！")
      }
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
