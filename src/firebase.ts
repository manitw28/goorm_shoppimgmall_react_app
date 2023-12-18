// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOQSE1bHiJkVpbhHMfymUZkIGCrr2XH20",
  authDomain: "benjamin-test-71233.firebaseapp.com",
  projectId: "benjamin-test-71233",
  storageBucket: "benjamin-test-71233.appspot.com",
  messagingSenderId: "840773856193",
  appId: "1:840773856193:web:5111c37f8c702c73851d40",
  measurementId: "G-M7DKHJH2F7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;