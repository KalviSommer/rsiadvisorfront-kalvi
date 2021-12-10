<template>

  <div class="SecondPage">
    <div>
      User ID: {{ userId }}
      <button v-on:click="backToHome()" style="text-align: center; margin-left: 15cm">Back to home</button>
      <br>
      <br>
    </div>
    <div style="text-align: left; margin-left: 100px; float:left">
      <button v-on:click="setAlert">Create new alert</button>
      <br>
      <br>
      <button>Choose symbol</button>
      <br>
      <br>
      <button>RSI timeframe</button>
      <br>
      <br>
      <button>RSI filter</button>
      <br>
      <br>
      <button>Add to table</button>
      <br>
      <br>
    </div>
    <div style="text-align: right; margin-right: 200px; float:right">
      <table>
        <th></th>
        <th>Symbol</th>
        <th>Closing price</th>
        <th>Current RSI</th>
        <th>RSI timeframe</th>
        <th>RSI filter</th>
        <tr>
          <td>
            <input type="checkbox"/>
          </td>
          <td>GET</td>
          <td>GET</td>
          <td>GET</td>
          <td>GET</td>
          <td>GET</td>
          <button>Delete</button>
        </tr>
      </table>
    </div>

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
    setAlert: function () {

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
    backToHome: function () {
      router.push({name: 'FirstPage'})
    }
  },
  mounted() {
    this.userId = this.$route.params.id

  }
}
</script>

<style>
input {
  background: #a29b97
}

table {
  text-decoration-color: #26e808;
  background-color: burlywood;
  border-style: solid;
  alignment: right;


}

tr {
  border-style: solid;
}

td {
  color: #282626;
  background-color: burlywood;
  border-style: solid;
  border-width: thin;
}

button {
  color-adjust: economy;
  color: #030303;
  background-color: #d7690f;
}

img {
  margin-left: unset
}


</style>