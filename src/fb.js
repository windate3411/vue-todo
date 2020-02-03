import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: process.env.fb_api_key,
  authDomain: "danny-todo.firebaseapp.com",
  databaseURL: "https://danny-todo.firebaseio.com",
  projectId: "danny-todo",
  storageBucket: "danny-todo.appspot.com",
  messagingSenderId: "890909080795",
  appId: process.env.fb_app_id,
  measurementId: "G-52991N1GHJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;