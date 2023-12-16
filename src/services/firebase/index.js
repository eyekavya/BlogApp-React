import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCbVGalNaJ0vGxLIBUWQSC4f3oiATbiQoM",
  authDomain: "portfolio-29575.firebaseapp.com",
  projectId: "portfolio-29575",
  storageBucket: "portfolio-29575.appspot.com",
  messagingSenderId: "464679472049",
  appId: "1:464679472049:web:3b77de30cc9bc4bb5b0b90",
  measurementId: "G-JLWWKTXQDC",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
