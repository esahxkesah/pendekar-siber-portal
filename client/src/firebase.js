// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "pendekar-siber-portal.firebaseapp.com",
  projectId: "pendekar-siber-portal",
  storageBucket: "pendekar-siber-portal.appspot.com",
  messagingSenderId: "788456172128",
  appId: "1:788456172128:web:ce4b456a3a00b58e953105"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);