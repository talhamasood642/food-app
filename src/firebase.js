import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBptsaa6nNWlNHMzXR6vNulYfYTf-4sdsI",
  authDomain: "food-app-f0f38.firebaseapp.com",
  projectId: "food-app-f0f38",
  storageBucket: "food-app-f0f38.appspot.com",
  messagingSenderId: "704061283502",
  appId: "1:704061283502:web:1987f9bfc098075b17613f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fs = getFirestore(app);
const auth = getAuth(app);
const storage= getStorage(app)
const db = getDatabase(app)

export  { fs , auth  ,storage ,db}