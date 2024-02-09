import { app } from './firebase-config.js'; 
import { getAuth, signInWithEmailAndPassword, signOut, clearInputField, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const usernameInputEl = document.getElementById("username")
const passwordInputEl = document.getElementById("password")

const loginButtonEl = document.getElementById("login-btn")

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

function authSignInWithEmail(event) {
    /*  
        Use the code from the documentaion to make this function work.
        
        Make sure to first create two consts, 'email' and 'password', to fetch the values from the input fields emailInputEl and passwordInputEl.
       
        If the login is successful then you should show the logged in view using showLoggedInView()
        If something went wrong, then you should log the error message using console.error.
    */
    event.preventDefault();
    const email = usernameInputEl.value
    const password = passwordInputEl.value

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("Login succeed!")
        window.location.href = "user_page.html";
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage)
    });
    
}

loginButtonEl.addEventListener("click", function(event) {
    console.log("click success");
    authSignInWithEmail(event);
});

function clearAuthFields() {
	clearInputField(usernameInputEl)
	clearInputField(passwordInputEl)
}

function authSignOut() {
    signOut(auth)
        .then(() => {
            // Do something
        }).catch((error) => {
            console.error(error.message)
        })
}

