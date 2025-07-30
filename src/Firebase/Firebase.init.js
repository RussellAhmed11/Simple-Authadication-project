

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9gPax1JKTmV0d-N8beLvtj62w9R5pFyM",
  authDomain: "firsebase-project-fe8f7.firebaseapp.com",
  projectId: "firsebase-project-fe8f7",
  storageBucket: "firsebase-project-fe8f7.firebasestorage.app",
  messagingSenderId: "428889713300",
  appId: "1:428889713300:web:714c2e3349ee3a17b6e281"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;