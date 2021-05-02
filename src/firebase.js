import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBy47kQtNwA61H2gTZNpC70_MoUrUrMnaQ",
  authDomain: "facebook-clone-8009f.firebaseapp.com",
  projectId: "facebook-clone-8009f",
  storageBucket: "facebook-clone-8009f.appspot.com",
  messagingSenderId: "80807722700",
  appId: "1:80807722700:web:ff14252a228cf445964c69"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
