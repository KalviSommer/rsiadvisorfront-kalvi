<template>
  <div class="app">


<!--    <div id="nav">-->
<!--      &lt;!&ndash;      <router-link to="/">Home</router-link> |&ndash;&gt;-->
<!--      <router-link to="/FirstPage">FirstPage</router-link>-->
<!--      |-->
<!--      <router-link to="/SecondPage">SecondPage</router-link>-->
<!--      |-->
<!--      <router-link to="/ThirdPage">ThirdPage</router-link>-->
<!--    </div>-->
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'app',
  data: function() {
    return {

    }
  },



}
</script>


<style>



</style>
