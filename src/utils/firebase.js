// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ28ipyO8SuZAupkR0YU340lyaRfb2Kt8",
  authDomain: "netflixgpt-d22d3.firebaseapp.com",
  projectId: "netflixgpt-d22d3",
  storageBucket: "netflixgpt-d22d3.appspot.com",
  messagingSenderId: "821473345939",
  appId: "1:821473345939:web:b8fb310db7ad7dd46be866",
  measurementId: "G-Y9391GCPJL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
