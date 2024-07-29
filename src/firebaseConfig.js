import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Realtime Database
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfvdcX2ennJtMMXyxFmqZUSMxprMzywZY",
  authDomain: "shopkeeper-web.firebaseapp.com",
  projectId: "shopkeeper-web",
  storageBucket: "shopkeeper-web.appspot.com",
  messagingSenderId: "540289475485",
  appId: "1:540289475485:web:e52fb48969c4051c5f8574"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const realtimeDb = getDatabase(app); // Initialize Realtime Database
const storage = getStorage(app);
const auth = getAuth(app);

export { realtimeDb, storage, auth }; // Export realtimeDb
