<template>
  <div class="SecondPage">

    User ID: {{userId}}

    <br>
    <button>Sign in</button>
    <br>
    <button>Create new account</button>

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