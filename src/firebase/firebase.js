// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "jamesdgrace-3d0a3.firebaseapp.com",
  projectId: "jamesdgrace-3d0a3",
  storageBucket: "jamesdgrace-3d0a3.appspot.com",
  messagingSenderId: "466309021408",
  appId: "1:466309021408:web:f40d209c30f4b0465c5a85",
  measurementId: "G-76N4RK5NSB",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const firestore = getFirestore(app)
