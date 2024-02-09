import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCjDUnlDHDUU7D6poJqqS10XIEmTmXoIW4",
    authDomain: "networkplatform-b5a27.firebaseapp.com",
    projectId: "networkplatform-b5a27",
    storageBucket: "networkplatform-b5a27.appspot.com",
    messagingSenderId: "19708565222",
    appId: "1:19708565222:web:f5ad3e4da94c743e7a0d27",
    measurementId: "G-YV5G1P2H9R"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };