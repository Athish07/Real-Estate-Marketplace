// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a8e29.firebaseapp.com",
  projectId: "mern-estate-a8e29",
  storageBucket: "mern-estate-a8e29.appspot.com",
  messagingSenderId: "66070859317",
  appId: "1:66070859317:web:012ea771336fee46372b7c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);