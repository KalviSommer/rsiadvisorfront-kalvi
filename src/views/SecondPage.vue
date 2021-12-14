<template>

  <div class="SecondPage" :class="mode">
    <Header :mode="mode" @toggle="toggle"/>
    <br>

    <div style="text-align: left; margin-left: 60px; float: left">
      <span>User ID: {{ userId }}</span>
      <br>
      <br>
      <br>
      <button v-on:click="setAlert">Create new alert</button>
      <br>
      <br>
      <button>Choose symbol</button>
      <br>
      1=BTC 2=ETC
      <select v-model="symbol">
        BTC
        <option>1</option>
        ETC
        <option>2</option>
      </select>
      <br>
      <br>
      <button>RSI timeframe</button>
      <select v-model="timeframe">
        <option>1D</option>
      </select>
      <br>
      <br>
      <button>RSI sell filter</button>
      <select v-model="rsifilter">
        <option>40</option>
        <option>35</option>
        <option>30</option>
        <option>25</option>
        <option>20</option>
      </select><br>
      <br>
      <br>
      <button v-on:click="alertParams">Set alert</button>
      <button v-on:click="setAlert">Add to table</button>
      <br>
      <br>
    </div>
<!--    <div style="text-align: right; margin-right: 200px; float:right">-->
     <div>
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
          <td>{{ alert.symbol }}</td>
          <td>{{ alert.closingPrice }}</td>
          <td>{{ alert.rsi }}</td>
          <td>{{ alert.rsiFilter }}</td>
          <td>{{ alert.rsiTimeframe }}</td>
          <button>Delete</button>
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
      alert: {},
      mode: 'dark'
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
      this.$http.post('rsiadvisor/alertParams/' + this.symbol + "/" + this.userId + "/"
          + this.rsifilter + "/" + this.timeframe)
    },

    setAlert: function () {
      this.$http.get('rsiadvisor/setalert/' + this.symbol + "/" + this.userId)
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
      this.userId = this.$route.params.id

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