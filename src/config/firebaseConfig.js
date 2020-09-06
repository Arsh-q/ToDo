import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAHim1vxEJxNSnYilrE0ZT3zYEFVsAmQhw",
    authDomain: "todo-14f29.firebaseapp.com",
    databaseURL: "https://todo-14f29.firebaseio.com",
    projectId: "todo-14f29",
    storageBucket: "todo-14f29.appspot.com",
    messagingSenderId: "936475490059",
    appId: "1:936475490059:web:788dc3a0190ac3a08c940e"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;