<template>
  <div class="ThirdPage" :class="mode">

    <header>
      <nav>
        <div class="ThirdPageImg">
          <img alt="rsi small logo" src="../assets/rsiSmall.png" style="height: 40px; width: 180px"
               v-on:click="backToHome()">
        </div>
        <div class="nav-link" v-on:click="backToHome()">Home</div>
      </nav>
    </header>


    <div class="ThirdPageCenter">
      <input class="rounded-card + thirdPageInput" v-model="usersDto.firstName"
             placeholder="First name">
      <br>
      <input class="rounded-card + thirdPageInput" v-model="usersDto.lastName"
             placeholder="Last name">
      <br>
      <input class="rounded-card + thirdPageInput" v-model="usersDto.email"
             placeholder="Email">
      <br>
      <input class="rounded-card + thirdPageInput" v-model="usersDto.password"
             placeholder="Set password">
      <br>
      <br>
      <button class="rounded-card + SignUpButton" v-on:click="createNewUser()">Sign up</button>
      <br>
      <br>
      {{ answer }}
      <br>
    </div>

    <div class="ThirdPageBottom">
      <h5 v-show="answer.startsWith('New account')">________</h5>
      <br>
      <button class="rounded-card + StartHereButton" v-show="answer.startsWith('New account')" v-on:click="startHere()">
        Start here
      </button>
    </div>
    <div v-if="token">
      <router-view/>
    </div>
  </div>
</template>

<script>
import router from "@/router";


export default {

  data: function () {
    return {
      usersDto: {},
      userId: "",
      answer: "",
      mode: 'dark',
      token: '',
    }
  },

  methods: {
    createNewUser: function () {
      this.$http.post('rsiadvisor/public/newuser', this.usersDto)
          .then(response => {
            this.usersDto.userId = response.data
            this.answer = "New account is registered with the id " + this.usersDto.userId
          })
          .catch(error => {
            if (this.usersDto.firstName == null || this.usersDto.lastName == null || this.usersDto.email == null || this.usersDto.password == null) {
              this.answer = "Please fill all fields"
            } else {
              this.answer = error.response.data.message;
            }
          })
    },
    startHere: function () {
      this.$http.post('rsiadvisor/public/login', this.usersDto)
          .then(result => {
            this.token = result.data
            localStorage.setItem('user-token', this.token)
            this.$http.defaults.headers.common['Authorization'] = "Bearer " + this.token
            router.push({
              name: 'SecondPage', params: {id: this.usersDto.userId}
            })
          })
    },
    backToHome: function () {
      router.push({name: 'FirstPage'})
    },
  }
}

</script>

<style>

.ThirdPageImg {
  position: fixed;
  top: 3.5%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  border: none;
}

ThirdPage {
  align-items: center;
}

.SignUpButton {
  width: 200px;
  height: 40px;
  border: none;
  background-image: linear-gradient(-225deg,
  #ac32e4 0%,
  #7918f2 48%,
  #4801ff 100%);
  color: #e2e2e2;
}

.StartHereButton {
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

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 25px;
  height: 60px;
}

.rounded-card {
  border-radius: 50px;
}

.thirdPageInput {
  width: 280px;
  height: 40px;
  text-align: center;
}


.ThirdPageBottom {
  position: fixed;
  bottom: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.ThirdPage {
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

.ThirdPageCenter {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

</style>