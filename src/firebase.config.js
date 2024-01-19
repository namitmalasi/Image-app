// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwGHcslMEMsC22UuHqVUpk8uUpfIyPyUM",
  authDomain: "iroc8-image-app.firebaseapp.com",
  projectId: "iroc8-image-app",
  storageBucket: "iroc8-image-app.appspot.com",
  messagingSenderId: "152196279093",
  appId: "1:152196279093:web:637ede6338d2bdb9f5ba7c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
