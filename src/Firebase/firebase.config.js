// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaj6GxEasGf2smY4xphtD-1QFbBCSab28",
  authDomain: "art-and-craft-b1839.firebaseapp.com",
  projectId: "art-and-craft-b1839",
  storageBucket: "art-and-craft-b1839.appspot.com",
  messagingSenderId: "576994069540",
  appId: "1:576994069540:web:0003f18d0404cd0c765cb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;