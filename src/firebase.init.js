// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUSf_1_MBGx4iwSg8kZ1vz25Fv2RY38GE",
    authDomain: "wholesale-dealers-5f173.firebaseapp.com",
    projectId: "wholesale-dealers-5f173",
    storageBucket: "wholesale-dealers-5f173.appspot.com",
    messagingSenderId: "802505674247",
    appId: "1:802505674247:web:64fead63a628db4f53a4a2"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;