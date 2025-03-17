// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjXvKgCIHB-aZkbqSSGysRfhTLqv2WTcc",
  authDomain: "thecoderides-admin.firebaseapp.com",
  projectId: "thecoderides-admin",
  storageBucket: "thecoderides-admin.firebasestorage.app",
  messagingSenderId: "105296362889",
  appId: "1:105296362889:web:70004ea5bcac01f8607558",
  databaseURL: "https://thecoderides-admin-default-rtdb.firebaseio.com",
  measurementId: "G-80E5QYV9RE"
  
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


