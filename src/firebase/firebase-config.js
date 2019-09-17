import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBBo63eKKrM6QDoQZPcHrGCeFVasExfp9g",
  authDomain: "learn-sep-2019-firebase-react.firebaseapp.com",
  databaseURL: "https://learn-sep-2019-firebase-react.firebaseio.com",
  projectId: "learn-sep-2019-firebase-react",
  storageBucket: "",
  messagingSenderId: "1017720467876",
  appId: "1:1017720467876:web:01cdcaae80f656971dd131"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;