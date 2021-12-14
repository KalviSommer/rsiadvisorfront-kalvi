<template>
  <div class="FirstPage" :class="mode">
    <br>
    <div class="FirstPageImg">
      <img alt="Rsi logo" src="../assets/rsilogo.png" v-card class="rounded-card">
    </div>
    <div class="center">
      <input v-card class="rounded-card" style="text-align: center" name="userId" placeholder="Enter user ID"
             v-model="userId">
      <br>
      <br>
      <button v-card class="rounded-card + signInButton" style="text-align: center" v-on:click="goToDashboard()">Sign
        in
      </button>
      <br>
      <br>
      {{ answer }}
      <br>
    </div>

    <div class="bottom">
      <h5>________</h5>
      <br>
      Don't have an account?
      <button v-card class="rounded-card + registerButton" v-on:click="goToRegister">Register
      </button>
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
    getSelectedUser: function () {

      this.$http.get('rsiadvisor/getuser/' + this.userId)
          .then(response => {
            this.userDetails = response.data
          })
    },
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

.FirstPageImg {
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  border: none;
  opacity: 0.8;


}

.center {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.bottom {
  position: fixed;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.rounded-card {
  border-radius: 50px;

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


.FirstPage {

  width: 100vw;
  min-height: 100vh;
  background: #F3F3F3;
  color: #15202B;
  transition: background 0.3s ease-in-out;
}


.dark {
  background: #192734;
  color: #E8E8E8;
}
</style>