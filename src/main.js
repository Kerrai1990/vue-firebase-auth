// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

// Initialize Firebase
let app;
var config = {

};

firebase.initializeApp(config);

let db = firebase.database()

firebase.auth().onAuthStateChanged(function (user) {
    if(!app) {
        /* eslint-disable no-new */
        app = new Vue({
          el: '#app',
          router,
          components: { App },
          template: '<App/>'
        })
    }
});
