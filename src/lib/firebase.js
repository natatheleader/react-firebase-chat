import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chat-6b3df.firebaseapp.com",
  databaseURL: "https://chat-6b3df-default-rtdb.firebaseio.com",
  projectId: "chat-6b3df",
  storageBucket: "chat-6b3df.appspot.com",
  messagingSenderId: "1043691673065",
  appId: "1:1043691673065:web:2b4bd2df4c343e8fb1a778",
  measurementId: "G-WTXEF9NG3Q"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();