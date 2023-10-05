import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCDe5Sy65b3VSvmNKDmGZVcg3iw1VjooJ4",
    authDomain: "my-doctor-01-a3a89.firebaseapp.com",
    projectId: "my-doctor-01-a3a89",
    storageBucket: "my-doctor-01-a3a89.appspot.com",
    messagingSenderId: "72834204180",
    appId: "1:72834204180:web:e2fc54d5a4300ba55ddd01",
    measurementId: "G-QP2E36091V"
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(Firebase);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(Firebase);

export default Firebase;

