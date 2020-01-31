import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyBIIhhSMwqa0WTUFlfhd_Z_yEEES_7LS3c",
  authDomain: "danny-todo.firebaseapp.com",
  databaseURL: "https://danny-todo.firebaseio.com",
  projectId: "danny-todo",
  storageBucket: "danny-todo.appspot.com",
  messagingSenderId: "890909080795",
  appId: "1:890909080795:web:5be424cfc4c8fc762920fe",
  measurementId: "G-52991N1GHJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;