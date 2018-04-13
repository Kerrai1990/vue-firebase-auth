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
            <tr v-for="location in locations">
              <td>{{location}}</td>

              <td><a v-bind:href="location.url">{{location.name}}</a></td>
              <td>{{location.score}}</td>
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
            locations: {},
        }
    },
    methods: {
        getReviews: function() {
          regions = this.$db.ref('regions');
          locations = this.$db.ref('locations');    
          this.locations = locations;
        },
    },
    mounted() {
      const database = firebase.database().ref( 'locations/0/reviews');
      database.on( 'value', snapshot => {
        const rev = firebase.database().ref('reviews/99');
        rev.on('value', snapshot => {
          this.locations = snapshot.val();
        });
      });  
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
