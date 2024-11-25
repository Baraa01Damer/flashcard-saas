// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "flashcardsaas-7b992.firebaseapp.com",
  projectId: "flashcardsaas-7b992",
  storageBucket: "flashcardsaas-7b992.firebasestorage.app",
  messagingSenderId: "437814442471",
  appId: "1:437814442471:web:3b1954b925a3f190d52542",
  measurementId: "G-YEVJYQX1Z7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);