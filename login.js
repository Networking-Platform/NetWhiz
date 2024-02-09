import { app } from './firebase-config.js'; 
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const usernameInputEl = document.getElementById("username")
const passwordInputEl = document.getElementById("password")

const signInButtonEl = document.getElementById("login-btn")

function loadUserPage() {
    window.location.href = "user_page.html";
}
