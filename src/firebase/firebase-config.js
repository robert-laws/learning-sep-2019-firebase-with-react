import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBBo63eKKrM6QDoQZPcHrGCeFVasExfp9g",
  authDomain: "learn-sep-2019-firebase-react.firebaseapp.com",
  databaseURL: "https://learn-sep-2019-firebase-react.firebaseio.com",
  projectId: "learn-sep-2019-firebase-react",
  storageBucket: "learn-sep-2019-firebase-react.appspot.com",
  messagingSenderId: "1017720467876",
  appId: "1:1017720467876:web:01cdcaae80f656971dd131"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

export default firebase;