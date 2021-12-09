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
<!--    näita start nuppu siis kui answer on täidetud-->
    <button v-show="answer !== '' " v-on:click="startHere(usersDto.userId)">Start here</button>

  </div>

</template>

<script>
import router from "@/router";

export default {
  data: function () {
    return {
      usersDto: {},
      answer: "",

    }
  },

  methods: {
    createNewUser: function () {
      this.$http.post('rsiadvisor/newuser', this.usersDto)
          .then(response => {
            this.answer = response.data
          })
    },
    startHere: function (userId) {
      router.push({name: 'SecondPage', params: {id: userId}})
    },
    backToHome: function () {
      router.push({name: 'FirstPage'})
    }
  }
}
</script>