import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4OYDc1G0nPcWDGRKRf1Pwhlgvx53DLoQ",
    authDomain: "simple-notes-firebase-6c901.firebaseapp.com",
    databaseURL: "https://simple-notes-firebase-6c901.firebaseio.com",
    projectId: "simple-notes-firebase-6c901",
    storageBucket: "simple-notes-firebase-6c901.appspot.com",
    messagingSenderId: "713345446499",
    appId: "1:713345446499:web:c85c717fb8f1cbbf09be56",
    measurementId: "G-205JC2805E"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

// Get a reference to the database service
export var database = firebase.database();

export default firebase;