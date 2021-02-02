import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDJ4XyKtNZL9_n9uKco8yMuZZBhmjX0HgI",
  authDomain: "clone-66494.firebaseapp.com",
  projectId: "clone-66494",
  storageBucket: "clone-66494.appspot.com",
  messagingSenderId: "364798364819",
  appId: "1:364798364819:web:b133e4ccc30cc820325166",
  measurementId: "G-HVS52X25JV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
