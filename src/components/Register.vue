<template>
  <div class="register">
      <h3>Register</h3>
      <input type="text" v-model="email" placeholder="Email"></br>
      <input type="password" v-model="password" placeholder="Password"></br>
      <button v-on:click='register'>Register</button>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'register',
  data () {
    return {
        email : '',
        password : ''
    }
  },
  methods: {
      register: function() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (user) => { alert('Your account has been created') },
          (err) => { alert('Oops! ' + err.message) }
        );
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
