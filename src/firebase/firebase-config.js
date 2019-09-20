import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

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
export const storage = firebase.storage();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

export const createUserProfileDocument = async (user, additionalData) => {
  if(!user) return;

  // Get a reference to the place in the database where a user profile might exist
  const userRef = firestore.doc(`users/${user.uid}`);

  // Go and fetch the document from that location
  const snapshot = await userRef.get();

  if(!snapshot.exists) {
    const { displayName, email, photoURL } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error('Error creating user', error.message);
    }
  }

  return getUserDocument(user.uid);
}

export const getUserDocument = async uid => {
  if (!uid) return null;

  try {
    return firestore.collection('users').doc(uid);
  } catch (error) {
    console.error('Error fetching user', error.message);
  }
}

export default firebase;