// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd4zh_LLMKfkX2jtV3gnT-Cl0G1dolPXo",
  authDomain: "email-auth-81501.firebaseapp.com",
  projectId: "email-auth-81501",
  storageBucket: "email-auth-81501.appspot.com",
  messagingSenderId: "431886986333",
  appId: "1:431886986333:web:23ace6d5b2391e057371b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth