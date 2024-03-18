// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0pX2ZeWYepb32shDIsMXzFr09ZfI2bXk",
  authDomain: "serendipity-scheme.firebaseapp.com",
  projectId: "serendipity-scheme",
  storageBucket: "serendipity-scheme.appspot.com",
  messagingSenderId: "230645799185",
  appId: "1:230645799185:web:e17fb3737c86e50b3e94b0",
  measurementId: "G-GT8771SDS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);