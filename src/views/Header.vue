<template>
  <header>
    <nav>
      <div class="nav-link" v-on:click="backToHome()">Home</div>
    </nav>
    <!--    <h1 class="modeh1">{{mode}} Mode</h1>-->
    <Toggle :mode="mode" @toggle="$emit('toggle')"/>

  </header>
</template>

<script>
import Toggle from '@/views/Toggle'
import router from "@/router";

export default {
  name: "Header",
  props: ['mode'],
  components: {
    Toggle
  },
  methods: {
    backToHome: function () {
      router.push({name: 'FirstPage'})
    }
  }
}
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 25px;
  height: 60px;
  background: #C3C3C3;
  transition: background 0.3s ease-in-out;
}

.dark header {
  background: #15202B;
}

header nav {
  display: flex;
  height: 60px;
}

header nav .nav-link {
  display: flex;
  padding: 0px 15px;
}

header nav .nav-link:hover {
  background: #B0B0B0;
}

.dark header nav .nav-link:hover {
  background: #101520;
}
</style>