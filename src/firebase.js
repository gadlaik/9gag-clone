// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIz-xcxdSj7H7Hgniqnr6-F3Zqv8m90sc",
  authDomain: "gag-clone-973a2.firebaseapp.com",
  projectId: "gag-clone-973a2",
  storageBucket: "gag-clone-973a2.appspot.com",
  messagingSenderId: "887063652086",
  appId: "1:887063652086:web:19127685833f473488eed7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
