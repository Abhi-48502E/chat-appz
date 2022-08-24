import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAopD-Nx8uWrmREygtTHtoc2M5DFJadRKg",
    authDomain: "chat-app-d06b3.firebaseapp.com",
    projectId: "chat-app-d06b3",
    storageBucket: "chat-app-d06b3.appspot.com",
    messagingSenderId: "786902853497",
    appId: "1:786902853497:web:e35594184bcd5acd20f1a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)