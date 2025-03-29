// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

// Your Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-qLET4b_OaAHEr_iF0ycFmX9_Mn4SLQU",
  authDomain: "cybershield-af42e.firebaseapp.com",
  projectId: "cybershield-af42e",
  storageBucket: "cybershield-af42e.firebasestorage.app",
  messagingSenderId: "693884471197",
  appId: "1:693884471197:web:470444350a85b927afd174",
  measurementId: "G-1Y575RPHKS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle Email/Password Login
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            document.getElementById("message").innerText = "Login successful!";
            console.log("Logged in:", userCredential.user);
        })
        .catch((error) => {
            document.getElementById("message").innerText = error.message;
            console.error(error);
        });
});

// Handle Google Login
document.getElementById("google-login").addEventListener("click", function () {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
            document.getElementById("message").innerText = "Google Login Successful!";
            console.log("Google User:", result.user);
        })
        .catch((error) => {
            document.getElementById("message").innerText = error.message;
            console.error(error);
        });
});