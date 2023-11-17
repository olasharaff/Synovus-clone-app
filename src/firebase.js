// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp0VrOwr27HRo01LX9TWbYTgDp8ByyAW8",
  authDomain: "synovus-clone-react.firebaseapp.com",
  projectId: "synovus-clone-react",
  storageBucket: "synovus-clone-react.appspot.com",
  messagingSenderId: "517852415684",
  appId: "1:517852415684:web:6d48a968a0a0979bca2b91",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
