// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_Ts5BqoctKEi-R3lHt_U1SBZhMjFwn60",
  authDomain: "netflixgpt3-291b5.firebaseapp.com",
  projectId: "netflixgpt3-291b5",
  storageBucket: "netflixgpt3-291b5.appspot.com",
  messagingSenderId: "405317738056",
  appId: "1:405317738056:web:842d1617c7bd63df26c27d",
  measurementId: "G-MFV5K9CFRV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth();