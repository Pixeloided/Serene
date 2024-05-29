// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { env } from "$env/dynamic/private";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: process.env.PRIVATE_FIREBASE_API_KEY,
  authDomain: "serendipity-scheme.firebaseapp.com",
  projectId: "serendipity-scheme",
  storageBucket: "serendipity-scheme.appspot.com",
  messagingSenderId: "230645799185",
  appId: "1:230645799185:web:e17fb3737c86e50b3e94b0",
  measurementId: "G-GT8771SDS0"
};

// Initialize Firebase