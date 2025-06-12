// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-31a0a.firebaseapp.com",
  projectId: "mern-estate-31a0a",
  storageBucket: "mern-estate-31a0a.firebasestorage.app",
  messagingSenderId: "1002281404824",
  appId: "1:1002281404824:web:ca9deaee9a15b4ba7403ed"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);