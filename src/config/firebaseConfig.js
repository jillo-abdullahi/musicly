
import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBfIZ4OM8kZRL34mRD3NPmV0889jk0QwsM",
    authDomain: "musicly-cellulant.firebaseapp.com",
    databaseURL: "https://musicly-cellulant.firebaseio.com",
    projectId: "musicly-cellulant",
    storageBucket: "musicly-cellulant.appspot.com",
    messagingSenderId: "690317649572",
    appId: "1:690317649572:web:0627f3b2ad998aef442831"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();

  export { firebase, db };