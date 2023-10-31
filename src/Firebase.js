// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATf7DPVpBJXkWKAK-7xmuly3xgIlHPcj4",
  authDomain: "creva-group.firebaseapp.com",
  projectId: "creva-group",
  storageBucket: "creva-group.appspot.com",
  messagingSenderId: "374253223536",
  appId: "1:374253223536:web:dee2fd0e32694214173eb5",
  measurementId: "G-92JYNZ1D4N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)