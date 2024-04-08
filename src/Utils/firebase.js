// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL0Qb1vrQOpcefRJ_YF3TXIqxJOC-8ubo",
  authDomain: "netflixpro-25344.firebaseapp.com",
  projectId: "netflixpro-25344",
  storageBucket: "netflixpro-25344.appspot.com",
  messagingSenderId: "144313743857",
  appId: "1:144313743857:web:cd6f7c0a85f548ee91ec50",
  measurementId: "G-J2B2B5XLQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);