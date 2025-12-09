// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH2LkkQ-aVq7BhAJ-VaRxgw_0Lyb27a_4",
  authDomain: "codecache-78eb4.firebaseapp.com",
  projectId: "codecache-78eb4",
  storageBucket: "codecache-78eb4.firebasestorage.app",
  messagingSenderId: "513669161100",
  appId: "1:513669161100:web:e7362c8fd056c814c3dba9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
