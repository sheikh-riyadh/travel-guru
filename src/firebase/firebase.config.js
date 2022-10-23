// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBdJzsOT9B3CZkUTw9MJqrRWPDZn04Ydt0",
    authDomain: "travel-guru-3b69b.firebaseapp.com",
    projectId: "travel-guru-3b69b",
    storageBucket: "travel-guru-3b69b.appspot.com",
    messagingSenderId: "1050535358136",
    appId: "1:1050535358136:web:1de70c115a55b7cabc0e4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;