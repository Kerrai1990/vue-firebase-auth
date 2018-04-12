<template>
  <div class="hello">
      <h2>Dashboard</h2>

      <div class="panel-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Joint</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="review in reviews">
              <td><a v-bind:href="reviews.url">{{reviews.name}}</a></td>
              <td>{{reviews.score}}</td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {

    data () {
        return {
            firebasename: 'Dashboard',
            reviews: {},
        }
    },
    methods: {
        getReviews: function() {
            regions = db.ref('regions')
            location = db.ref('locations')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
