// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBe2NFbKWi_r5RwjqGfaZSpDbI4AzC6W0Y",
    authDomain: "car-doctor-5ce25.firebaseapp.com",
    projectId: "car-doctor-5ce25",
    storageBucket: "car-doctor-5ce25.appspot.com",
    messagingSenderId: "743122749656",
    appId: "1:743122749656:web:f834c867b837e8699aefad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;