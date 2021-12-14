<template>

  <div class="SecondPage" :class="mode">
    <Header :mode="mode" @toggle="toggle"/>
    <br>

    <div style="text-align: left; margin-left: 60px; float: left">
      <span>User ID: {{ userId }}</span>
      <br>
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
<!--    <div style="text-align: right; margin-right: 200px; float:right">-->
     <div>
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
import Header from '@/views/Header';


export default {
  name: 'SecondPage',
  data: function () {
    return {
      userId: "",
      postedParams: "",
      symbol: "",
      timeframe: "",
      rsifilter: "",

    
      mode: 'dark'

      alert: []


    }
  },
  components: {
    Header,
  },

  created() {
    window.addEventListener('keyup', this.keyPress)
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
  },
  mounted() {
    this.userId = this.$route.params.id;
    this.getAlertlist()


    },
  }
}


</script>


<style>
button {
  width: 100px;
  height: 20px;
  font-size: 16px;
  border: none;
  background-image: linear-gradient(-225deg,
  #ac32e4 0%,
  #7918f2 48%,
  #4801ff 100%);
  color: #e2e2e2;
  border-radius: 50px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
.SecondPage {
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

table {
  display: flex;
  justify-content: right;

}

tr {
  background-color: #7918f2;
}

td {
  background-color: #4801ff;
}




</style>