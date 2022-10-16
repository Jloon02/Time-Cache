// Import FirebaseAuth and firebase.
import {React, useEffect, useState} from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB48Y5dXU9LEzF90v_HpwjRuhpdn5E3YRU",
  authDomain: "montage-my-life.firebaseapp.com",
  projectId: "montage-my-life",
  storageBucket: "montage-my-life.appspot.com",
  messagingSenderId: "313907210763",
  appId: "1:313907210763:web:074d392c625a87e21e350e",
  measurementId: "G-9YD1RBJ11M"
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

const auth = getAuth(app);

export default function Home() {
  const [caption, setCaption] = useState("");
  const [prompt, setPrompt] = useState("");
  const [date, setDate] = useState("");
  const [uid, setUid] = userState("test")

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      console.log("User signed in")
      setUid(user.uid)
    } else {
      console.log("User not signed in")
    }
  });

  return (
    <div>
      {uid}
    </div>
  )
}