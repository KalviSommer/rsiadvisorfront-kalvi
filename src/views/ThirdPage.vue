<template>
  <div class="3page">
    <button v-on:click="backToHome()">Back to home</button>
    <br>
    <h1>Create new user</h1>
    <input v-model="usersDto.firstName" placeholder="First name">
    <br>
    <input v-model="usersDto.lastName" placeholder="Last name">
    <br>
    <input v-model="usersDto.email" placeholder="Email">
    <br>
    <button v-on:click="createNewUser()">Create new user</button>
    <br>
    {{ answer }}
    <br>
    <br>
    {{answer2}}
        <!--    näita start nuppu siis kui answer on täidetud v-show="answer !== '' "-->
    <button v-show="answer !== '' " v-on:click="startHere()">Start here</button>

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
      answer2: "",

    }
  },

  methods: {
    createNewUser: function () {
      this.$http.post('rsiadvisor/newuser', this.usersDto)
          .then(response => {
            this.userId = response.data
            this.answer = "New account is created with the id " + this.userId
            this.answer2 = "You may start right away => "
          })
    },
    startHere: function () {
      router.push({name: 'SecondPage', params: {id: this.userId}})
    },
    backToHome: function () {
      router.push({name: 'FirstPage'})
    }
  }
}
</script>