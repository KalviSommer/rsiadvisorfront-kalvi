<template>
  <div class="ThirdPage" :class="mode">
    <header>
      <nav>
        <div class="ThirdPageImg">
          <img alt="rsi small logo" src="../assets/rsiSmall.png" style="height: 45px; width: 180px"
               v-on:click="backToHome()">
        </div>
        <div class="nav-link" v-on:click="backToHome()">Home</div>
      </nav>
    </header>
    <br>
    <div class="ThirdPageCenter">
      <input class="rounded-card  + thirdPageInput" style="text-align: center" v-model="usersDto.firstName"
             placeholder="First name">
      <br>

      <input class="rounded-card + thirdPageInput" style="text-align: center" v-model="usersDto.lastName"
             placeholder="Last name">
      <br>

      <input class="rounded-card + thirdPageInput" style="text-align: center" v-model="usersDto.email"
             placeholder="Email">
      <br>
      <br>
      <button class="rounded-card + signInButton" v-on:click="createNewUser()">Sign up</button>
      <br>
      <br>
      {{ answer }}
      <br>

    </div>
    <div class="ThirdPageBottom">
      <h5 v-show="answer !== '' ">________</h5>
      <br>

      <!--    näita start nuppu siis kui answer on täidetud v-show="answer !== '' "-->
      <button class="rounded-card + registerButton" v-show="answer !== '' " v-on:click="startHere()">Start here
      </button>
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
      mode: 'dark'
    }

  },

  methods: {
    createNewUser: function () {
      this.$http.post('rsiadvisor/newuser', this.usersDto)
          .then(response => {
            this.userId = response.data
            this.answer = "New account is registered with the id " + this.userId
          })
    },
    startHere: function () {
      router.push({name: 'SecondPage', params: {id: this.userId}})
    },
    backToHome: function () {
      router.push({name: 'FirstPage'})
    },
    keyPress(e) {
      if (e.key === 't') {
        this.toggle()
      }
    },
    toggle() {
      if (this.mode === "dark") {
        this.mode = "light"
      } else {
        this.mode = "dark"
      }
    }
  }
}

</script>
<style>
ThirdPage {
  align-items: center;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 25px;
  height: 60px;
  background: #C3C3C3;
  transition: background 0.3s ease-in-out;

}

.rounded-card {
  border-radius: 50px;
}

.ThirdPageImg {
  position: fixed;
  top: 3.5%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  border: none;


}

.thirdPageInput {
  width: 300px;
  height: 40px;
}


.ThirdPageBottom {
  position: fixed;
  bottom: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.dark nav {
  background: #15202B;
}

Thirdpage nav .nav-link {
  display: flex;
  align-items: center;
  padding: 0px 15px;
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