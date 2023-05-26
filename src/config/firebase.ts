// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHTNcBcTZH_BWrHTcZaBuDSdCYXY0mPo0",
  authDomain: "vr7recruiter.firebaseapp.com",
  projectId: "vr7recruiter",
  storageBucket: "vr7recruiter.appspot.com",
  messagingSenderId: "492742489528",
  appId: "1:492742489528:web:27120de05574bc73d08b4d",
  measurementId: "G-5MC6Z4T2E8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);