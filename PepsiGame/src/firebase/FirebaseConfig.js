import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBWjlW_rBWQHbIV25jMtlMHMmqhO48F-eI",
  authDomain: "pepsigame-24ba5.firebaseapp.com",
  databaseURL: "https://pepsigame-24ba5-default-rtdb.firebaseio.com",
  projectId: "pepsigame-24ba5",
  storageBucket: "pepsigame-24ba5.appspot.com",
  messagingSenderId: "837480536168",
  appId: "1:837480536168:web:4c55245c79cb7feb6403dd",
  measurementId: "G-11E47LQ090"
};

// Initialize Firebase
export const initialize = initializeApp(firebaseConfig);
