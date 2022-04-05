import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBcZFSMwxo7gf8YF0PjqOkPjX_kOEZDAP8",
  authDomain: "rising-b7c20.firebaseapp.com",
  projectId: "rising-b7c20",
  storageBucket: "rising-b7c20.appspot.com",
  messagingSenderId: "269728320072",
  appId: "1:269728320072:web:a8dd3f3edd6904125be67d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export default db;
export { auth };
