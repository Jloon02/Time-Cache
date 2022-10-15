import Home from "./components/home";
import Login from "./components/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import firebase from 'firebase/compat/app';

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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
