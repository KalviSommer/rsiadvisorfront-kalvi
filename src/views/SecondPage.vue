<template>

  <div class="SecondPage">
    <div>

      <button v-on:click="backToHome()" style="text-align: center; margin-left: 15cm">Back to home</button>
      <br>
      <br>
    </div>
    <div style="text-align: left; margin-left: 100px; float: left">
      <span>User ID: {{ userId }}</span><br>
      <br>
      <br>
      <button v-on:click="getAlertlist">Refresh</button>
      <br>
      <br>
      Choose symbol <br>
      <select v-model="symbol">
        <option value="1">BTC/USDT</option>
        <option value="2">ETH/USDT</option>
        <option value="3">SOL/USDT</option>
        <option value="4">BNB/USDT</option>
      </select>
      <br>
      <br>
      RSI timeframe
      <select v-model="timeframe">
        <option>1D</option>
        <option>1H</option>
      </select>
      <br>
      <br>
      RSI sell filter <br>
      Crossing down
      Available values:1-100
      <input v-model="rsifilter">
      <br>
      <br>
      <br>
      <button v-on:click="alertParams">Set alert</button>
      <br>
      <br>
    </div>


    <div style="text-align: right; margin-right: 200px; float:right">
      <table>
        <tr>
        <th>Symbol</th>
        <th>Closing price</th>
        <th>Current RSI</th>
        <th>RSI timeframe</th>
        <th>RSI filter</th>
        </tr>
        <tr v-for="row in alert">
          <td>{{ row.symbol }}</td>
          <td>{{ row.closingPrice }}</td>
          <td>{{ row.rsi }}</td>
          <td>{{ row.rsiTimeframe }}</td>
          <td>{{ row.rsiFilter }}</td>
          <button v-on:click="deleteAlert(row.id)">Delete</button>
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
      userId: "",
      postedParams: "",
      symbol: "",
      timeframe: "",
      rsifilter: "",
      alert: []

    }
  },

  methods: {

    alertParams: function () {
      this.$http.post('rsiadvisor/setAlert/' + this.symbol + "/" + this.userId + "/"
          + this.rsifilter + "/" + this.timeframe)
      .then(response => {this.getAlertlist()})
      .catch(error => {
        alert(error.response.data.message)
      })
    },

    getAlertlist: function () {
      this.$http.get('rsiadvisor/alertlist/' + this.userId)
          .then(response => {
            this.alert = response.data
          })
    },
    getSelectedUser: function () {
      this.$http.get('rsiadvisor/getuser/' + this.userId)

          .then(response => {
            console.log(this.alertParams)
            this.postedParams = response.data
          })
    },
    deleteAlert: function (id) {
      this.$http.delete('rsiadvisor/deletealert//' + id)
          .then(response => {
            this.getAlertlist()
          })
    },

    goToDashboard: function () {
      router.push({name: 'SecondPage'})
    }
    ,
    backToHome: function () {
      router.push({name: 'FirstPage'})
    }
  },
  mounted() {
    this.userId = this.$route.params.id;
    this.getAlertlist()

  }
}


</script>


<style scoped>


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