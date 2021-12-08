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
<!--    <button v-on:click="startHere">Start here</button>-->

  </div>

</template>

<script>
import router from "@/router";

export default {
  data: function () {
    return {
      usersDto: {},
      answer: ""
    }
  },

  methods: {
    createNewUser: function () {
      this.$http.post('rsiadvisor/newuser', this.usersDto)
          .then(response => {
            this.answer = response.data
          })
    },
    backToHome: function () {
      router.push({name: 'FirstPage'})
    }
  }
}
</script>