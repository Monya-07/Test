import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

// Firebase Config
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

// Google Login
document.getElementById("google-login").addEventListener("click", () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log("Google Login Successful!", result.user);
            alert("Logged in as: " + result.user.email);
        })
        .catch((error) => {
            console.error("Google Login Error:", error.message);
            alert("Error: " + error.message);
        });
});