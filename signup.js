import { app } from './firebase-config.js'; 
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const auth = getAuth(app);

const usernameInputEl = document.getElementById("username")
const passwordInputEl = document.getElementById("password")

function authCreateAccountWithEmail(event) {
    /*  Use the code from the documentaion to make this function work.
        
        Make sure to first create two consts, 'email' and 'password', to fetch the values from the input fields emailInputEl and passwordInputEl.
       
        If the creation of user is successful then you should show the logged in view using showLoggedInView()
        If something went wrong, then you should log the error message using console.error.
    */
    event.preventDefault();
    console.log("click success")
    const email = usernameInputEl.value
    const password = passwordInputEl.value
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log("User created successfully with email: ", userCredential.user.email);
        // Go to sign up successful page/give a message
        window.location.href = "user_page.html";
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error creating user: ", error.message);
    });    

}

const signupButtonEl = document.getElementById("signup-btn")
signupButtonEl.addEventListener("click", function(event) {
    authCreateAccountWithEmail(event);
});
