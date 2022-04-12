// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwE9mA7Mab50zW_i2tfQM3vDkLGaObYzA",
  authDomain: "ema-jhon-simple-33c73.firebaseapp.com",
  projectId: "ema-jhon-simple-33c73",
  storageBucket: "ema-jhon-simple-33c73.appspot.com",
  messagingSenderId: "796042261504",
  appId: "1:796042261504:web:c1fe24e3aaeac7795914e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;