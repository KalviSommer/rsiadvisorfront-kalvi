<template>

  <div class="SecondPage" :class="mode">

    <Header :mode="mode" @toggle="toggle"/>

    <br>
    <span style="text-align: left; margin-left: 60px">User ID: {{ userId }}</span>
    <div style="display: flex">
      <div class="SecondPageAlignLeft">
        <div>
          Choose symbol
          <div>
            <select v-model="symbol">
              <option value="1">BTC/USDT</option>
              <option value="2">ETH/USDT</option>
              <option value="3">SOL/USDT</option>
              <option value="4">BNB/USDT</option>
            </select>
          </div>
          <br>
          RSI timeframe
          <div>
            <select v-model="timeframe">
              <option>1D</option>
              <option>1H</option>
            </select>
          </div>
          <br>
          Crossing
          <div>
            <select v-model="crossing">
              <option value="<">↑</option>
              <option value=">">↓</option>
            </select>
          </div>
          <br>
          RSI value
          <div>
            <input v-model="rsiFilter" placeholder="available values:1-100" class="SecondPageInput"></div>
          <br>
          <br>
          <br>
          <button v-on:click="alertParams">Set alert</button>
          <br>
          <br>
        </div>
      </div>
      <div class="SecondPageAlignRight">
        <table>
          <tr>
            <button v-on:click="getAlertlist">Refresh</button>
          </tr>
          <br>
          <tr>
            <th>Symbol</th>
            <th>Closing price</th>
            <th>Current RSI</th>
            <th>RSI timeframe</th>
            <th>RSI filter</th>
            <th>Crossing</th>
          </tr>
          <tr v-for="row in alert">
            <td>{{ row.symbol }}</td>
            <td>{{ row.closingPrice }}</td>
            <td>{{ row.rsi }}</td>
            <td>{{ row.rsiTimeframe }}</td>
            <td>{{ row.rsiFilter }}</td>
            <td v-if="row.crossing=='<'">↑</td>
            <td v-if="row.crossing=='>'">↓</td>
            <button style="height: auto; width: 1.5cm" v-on:click="deleteAlert(row.id)">Delete</button>
          </tr>
        </table>
      </div>
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
      rsiFilter: "",
      crossing: "",
      mode: 'dark',
      alert: [],

    }
  },
  components: {
    Header,
  },


  methods: {

    alertParams: function () {
      this.$http.post('rsiadvisor/setAlert/' + this.symbol + "/" + this.userId + "/" + this.rsiFilter +
          "/" + this.timeframe + "/" + this.crossing)
          .then(response => {
            this.getAlertlist()
          })
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
    toggle() {
      if (this.mode === "dark") {
        this.mode = "light"
      } else {
        this.mode = "dark"
      }
    }
  },
  mounted() {
    this.$nextTick(function () {
      window.setInterval(() => {
        this.getAlertlist();
      },10000);
    })
    this.userId = this.$route.params.id;
    this.getAlertlist()

  },
}


</script>


<style>


.SecondPageAlignLeft {
  width: 30%;
  margin-left: 10%;
  margin-top: 5%;
  text-align: left;
}

.SecondPageAlignRight {
  width: 50%;
  margin-right: 10%;
  margin-top: 1%;
  text-align: center;

}

.SecondPage button {
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

SecondPage span {
  width: 50%;
}

select {
  width: 50%;
  height: 20px;
  border: none;
  text-align: center;
  background-image: linear-gradient(-225deg,
  #4801ff 0%,
  #7918f2 48%,
  #4801ff 100%);
  background-color: #192734;
  color: #e2e2e2;
  text: bold;
  border-radius: 50px;
}

.SecondPageInput {
  width: 50%;
  height: 20px;
  text-align: center;
  border: none;
  color: #0e0e0e;
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

th {
  border-bottom: 1pt solid #F3F3F3;
  font-size: large;
  color: #b37afa;
  padding: 6px;

}


td {
  padding-left: 7.5px;
  padding-right: 7.5px;
  border-bottom: 1pt solid #F3F3F3;
}

td:first-child {
  padding-left: 0;

}

td:last-child {
  padding-right: 0;

}

SecondPage placeholder {
  color: #f3efef;
}


</style>