<template>
  <div class="SecondPage" style="text-align: left; margin-left: 100px">
    <span>User ID: {{userId}}</span><br>
    <br>
    <br>
    <div style="text-align: left; margin-left: 100px">
     <button v-on:click="setAlert">Create new alert</button><br>
      <br>
    </div>
    <button>Choose symbol</button><br>
      <br>

      <button>RSI timeframe</button><br>
      <br>
      <button>RSI filter</button><br>
      <br>
      <button>Add to table</button><br>
      <br>

    <button class="Center">Demo</button>


  </div>

</template>
<script>
import router from "@/router";

export default {
  data: function () {
    return {
      answer: "",
      userId: "",
      userIdAns: {}
    }
  },

  methods: {
    setAlert: function (){

    },
    getSelectedUser: function () {
      this.$http.get('rsiadvisor/getuser/' + this.userId)
          .then(response => {
            this.userIdAns = response.data
          })
    },
    goToRegister: function () {
      router.push({name: '3page'})
    },
    goToDashboard: function () {
      router.push({name: 'SecondPage'})
    },
  },
  mounted() {
    this.userId = this.$route.params.id

  }
}
</script>

<style scoped>
input {background: #a29b97
}
table {
  text-decoration-color: #26e808;
  background-color: burlywood;
  margin-left: auto;
  margin-right: auto;

}
td{color: #282626;
  background-color: darkkhaki;
}
button {color-adjust: economy;
  color: #030303;
  background-color: #d7690f;
  }
img {margin-left: unset}
</style>