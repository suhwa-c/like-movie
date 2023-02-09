// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwtcSC8_3A8Ha6kUtoOZhwOVa8t6-7XIM",
  authDomain: "like-movie-6ed59.firebaseapp.com",
  projectId: "like-movie-6ed59",
  storageBucket: "like-movie-6ed59.appspot.com",
  messagingSenderId: "153820081868",
  appId: "1:153820081868:web:4ffbae099416830b0b5c69",
  measurementId: "G-8SLT8DY621",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
