// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

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
firebase.initializeApp(firebaseConfig);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/signedIn',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
};

function Login() {
  return (
<body>
      <head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"></link>
      <link rel="stylesheet" href="./loginPage.css"></link>
      <script src="./loginPage.js" defer></script>
      </head>
      <div id="welcome_container">
        <h1 class="welcome_message">Please Log-In: </h1>
      </div>

      <div class="center">
        <div id="login_container">
          <form>
            <label for="username"></label>
            <input type="text" id="username" placeholder="Username" name="username" required></input>
            <label for="password"></label>
            <input type="password" id="password" placeholder="Password" name="password" required></input>
            <div id="incorrect_credentials" class="center">
              <b>Your username or password is not correct!</b>
            </div>

            <div class="buttons">
              <button type="button" id="login" onclick="handleLogin()">Log-In</button>
            </div>
          </form>

        </div>
      </div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </body>

  );
}

export default Login