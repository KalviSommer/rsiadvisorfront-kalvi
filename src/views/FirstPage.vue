<template>
  <div class="FirstPage">
    <h1>RSI Advisor</h1>
    <input name="userId" placeholder="Enter user ID" v-model="userId">

    <br>
    <button v-on:click="goToDashboard()">Sign in</button>
    <br>
    <button v-on:click="goToRegister">Create new user</button>

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
      userIdAns: {}
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
      console.log(this.userId)
      router.push({name: 'SecondPage', params: {id: this.userId}})
    },
  }
}
</script>