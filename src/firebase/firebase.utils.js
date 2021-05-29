import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBT8iiwMsIiEdzIMsF-wpFLPingMRD3J_g",
    authDomain: "ghost-view-ddb11.firebaseapp.com",
    projectId: "ghost-view-ddb11",
    storageBucket: "ghost-view-ddb11.appspot.com",
    messagingSenderId: "478288815178",
    appId: "1:478288815178:web:e4be90c296625c6d3f72b3",
    measurementId: "G-HFL2YHP7LH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;