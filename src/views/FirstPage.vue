<template>
  <div class="FirstPage" :class="mode">

    <div class="FirstPageImg">
      <img alt="Rsi logo" src="../assets/rsilogo.png" class="rounded-card">
    </div>

    <div class="AlignCenter">
      <input class="rounded-card" style="text-align: center" name="userId" placeholder="Enter user ID"
             v-model="userId">
      <br>
      <br>
      <button class="rounded-card + signInButton" v-on:click="goToDashboard()">Sign in</button>
      <br>
      <br>
      {{ answer }}
      <br>
    </div>

    <div class="AlignBottom">
      <h5>________</h5>
      <br>
      Don't have an account?
      <button class="rounded-card + registerButton" v-on:click="goToRegister">Register</button>
    </div>
  </div>


</template>

<script>
import router from "@/router";


export default {

  data: function () {
    return {
      userDetails: {},
      answer: '',
      userId: '',
      userIdAns: {},
      mode: 'dark'
    }
  },


  methods: {

    goToRegister: function () {
      router.push({name: 'ThirdPage'})
    },
    goToDashboard: function () {
      if (this.userId) {
        router.push({name: 'SecondPage', params: {id: this.userId}})
      } else {
        this.answer = "Please enter ID to sign in"
      }
    },
  }
}
</script>

<style>

.FirstPage {
  width: 100vw;
  min-height: 100vh;

}

.FirstPageImg {
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  border: none;
  opacity: 0.8;
}

.rounded-card {
  border-radius: 50px;
}

.AlignCenter {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

input {
  width: 300px;
  height: 50px;
}

.signInButton {
  width: 200px;
  height: 40px;
  border: none;
  background-image: linear-gradient(-225deg,
  #ac32e4 0%,
  #7918f2 48%,
  #4801ff 100%);
  color: #e2e2e2;
}

.AlignBottom {
  position: fixed;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.registerButton {
  width: 100px;
  height: 20px;
  font-size: 16px;
  border: none;
  background-image: linear-gradient(-225deg,
  #ac32e4 0%,
  #7918f2 48%,
  #4801ff 100%);
  color: #e2e2e2;
}

</style>