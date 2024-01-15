// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDa4GEcyZaMYAkEs46ajRkwD2wKSxRohgs",
  authDomain: "chat-app-6fec4.firebaseapp.com",
  projectId: "chat-app-6fec4",
  storageBucket: "chat-app-6fec4.appspot.com",
  messagingSenderId: "806331557023",
  appId: "1:806331557023:web:003a491ab43178d887eeaa",
  measurementId: "G-JFQ38SX64J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);