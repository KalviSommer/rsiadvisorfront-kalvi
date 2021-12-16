<template>
  <header>
    <nav>
      <div class="nav-link" v-on:click="signout()">Sign out</div>
    </nav>
    <Toggle :mode="mode" @toggle="$emit('toggle')"/>
    <div v-if="token">
      <router-view/>
    </div>
  </header>

</template>

<script>
import Toggle from '@/views/Toggle'
import router from "@/router";

export default {
  data: function () {
    return {
      token: '',
    }
  },
  name: "Header",
  props: ['mode'],
  components: {
    Toggle
  },
  methods: {
    signout: function () {
      this.token = '';
      localStorage.removeItem('user-token')
      router.push({name: 'FirstPage'})
      location.reload();
    },
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