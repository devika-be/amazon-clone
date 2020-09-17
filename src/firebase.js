import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNkTt5Mi8EgHc8Ahv0nrC5gcwiscb6aK8",
  authDomain: "clone-67432.firebaseapp.com",
  databaseURL: "https://clone-67432.firebaseio.com",
  projectId: "clone-67432",
  storageBucket: "clone-67432.appspot.com",
  messagingSenderId: "186715585022",
  appId: "1:186715585022:web:0fda499b506b500c62a8af",
  measurementId: "G-LYZP7W3N7Q"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
