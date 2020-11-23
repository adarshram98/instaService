import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyB_aA7qdgZNhfPJG8PW_LphAITvOKS4k0A",
  authDomain: "instaservice-3d2e5.firebaseapp.com",
  databaseURL: "https://instaservice-3d2e5.firebaseio.com",
  projectId: "instaservice-3d2e5",
  storageBucket: "instaservice-3d2e5.appspot.com",
  messagingSenderId: "624752517177",
  appId: "1:624752517177:web:41f57995b60f2bb57e2de8",
  measurementId: "G-ZB823JLB7Z",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = fire.firestore();
const storage = firebase.storage();

export { db, storage, auth };
