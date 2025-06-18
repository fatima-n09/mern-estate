// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6Z4iltvVlgD3-DjTZUjtiZOERF0v7gH8",
  authDomain: "flashcard-saas-b77ca.firebaseapp.com",
  databaseURL: "https://flashcard-saas-b77ca-default-rtdb.firebaseio.com",
  projectId: "flashcard-saas-b77ca",
  storageBucket: "flashcard-saas-b77ca.firebasestorage.app",
  messagingSenderId: "959221190721",
  appId: "1:959221190721:web:83fc9fc60e3f1103e2b6c0",
  measurementId: "G-DH54P6XPQW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;