import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsBHl7p-kNbPk2uNdngoZFMpLDQsRCq8c",
  authDomain: "react-authentication-todo.firebaseapp.com",
  projectId: "react-authentication-todo",
  storageBucket: "react-authentication-todo.appspot.com",
  messagingSenderId: "211213429402",
  appId: "1:211213429402:web:5dc7389c91416ae2e94d23",
  measurementId: "G-LXYWPJ4FLD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Pass app to getAuth
export const db = getFirestore(app); // Pass app to getFirestore
export default app;
