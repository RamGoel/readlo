import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_SENDER_ID,
    appId: import.meta.env.VITE_USER_ID,
    measurementId: import.meta.env.VITE_MEASURE_ID
};

console.log(firebaseConfig)

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase();
