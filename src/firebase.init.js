// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2LsoMGSXGLvL53OtrnDc1kb84Uk7e7Ng",
    authDomain: "wholesale-dealers.firebaseapp.com",
    projectId: "wholesale-dealers",
    storageBucket: "wholesale-dealers.appspot.com",
    messagingSenderId: "1051158805096",
    appId: "1:1051158805096:web:7961571f65fee95df019dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;