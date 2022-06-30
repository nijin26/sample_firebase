import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBGwCVq8ikNq6jtPFmdkvAwnDoh3pFIlxo",
  authDomain: "sample-project-10f02.firebaseapp.com",
  projectId: "sample-project-10f02",
  storageBucket: "sample-project-10f02.appspot.com",
  messagingSenderId: "135280023199",
  appId: "1:135280023199:web:e75d643eae5d31e7dd34aa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("register").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(function (userCredential) {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      document.getElementById("heading").innerHTML = user.uid;
    })
    .catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
});

document.getElementById("login").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
});
