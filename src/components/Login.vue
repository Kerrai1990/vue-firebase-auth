<template>
  <div class="login">
      <h3>Sign In</h3>
      <input type="text" v-model="email" placeholder="Email"></br>
      <input type="password" v-model="password" placeholder="Password"></br>
      <button v-on:click="login">Connection</button>

      <p>Register Here</p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data () {
    return {
        email: '',
        password: '',
    }
  },
  methods: {
      login: function() {
          firebase.auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then( user => {
              alert('signed in');
              this.$router.replace("dashboard");
          },
          error => { alert(error.message); });
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
