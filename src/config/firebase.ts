// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDPygkD9mzXR8saAmTRXedF7FXqS5ac2o",
  authDomain: "export-navigator.firebaseapp.com",
  projectId: "export-navigator",
  storageBucket: "export-navigator.appspot.com",
  messagingSenderId: "878663508549",
  appId: "1:878663508549:web:9c3a6617291d74b24cf92c",
  measurementId: "G-TYRQVF0PP5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
