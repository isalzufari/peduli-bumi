// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7tUpBi5u9BGQ5FTIkcjrYtvRcF5dYzDU",
  authDomain: "peduli-bumi.firebaseapp.com",
  projectId: "peduli-bumi",
  storageBucket: "peduli-bumi.appspot.com",
  messagingSenderId: "837403916857",
  appId: "1:837403916857:web:752ccba64e303320012be8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// sign-in
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export {
  app,
  provider,
  auth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider
}