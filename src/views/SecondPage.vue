<template>
  <div class="SecondPage">

    <div style="text-align: left; margin-left: 100px; float: left">
      <span>User ID: {{ userId }}</span><br>
      <br>
      <br>
      <button v-on:click="setAlert">Create new alert</button>
      <br>
      <br>
      <button>Choose symbol</button><br>
      1=BTC 2=ETC
      <select v-model="symbol">
        BTC<option>1</option>
        ETC<option>2</option>
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
      <button v-on:click="alertParams">Add to table</button>
      <br>
      <br>
    </div>
    <div style="text-align: right; margin-right: 100px">
      <table>
        <tr>
          <th></th>
          <th>Symbol</th>
          <th>Current price</th>
          <th>Current RSI</th>
          <th>RSI timeframe</th>
          <th>RSI filter</th>
          <th></th>
        </tr>
        <tr>
          <td>rrt</td>
          <td>rtr</td>
          <td>trtr</td>
        </tr>
        <tr>
          <td>rrt</td>
          <td>rtr</td>
          <td>trtr</td>
        </tr>
        <tr>
          <td>rrt</td>
          <td>rtr</td>
          <td>trtr</td>
        </tr>
        <tr>
          <td>rrt</td>
          <td>rtr</td>
          <td>trtr</td>
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

    }
  },

  methods: {
    alertParams: function () {
      this.$http.post('rsiadvisor/alertParams/' + this.symbol + "/" + this.userId+ "/"
          + this.rsifilter + "/" + this.timeframe)
          .then(response => {
            console.log(this.alertParams)
            this.postedParams = response.data
          })
    },
    setAlert: function () {

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
input {
  background: #a29b97
}

table {
  text-decoration-color: #26e808;
  background-color: burlywood;
  margin-left: auto;
  margin-right: auto;

}

td {
  color: #282626;
  background-color: darkkhaki;
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