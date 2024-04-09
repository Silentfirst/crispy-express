import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyC91z6I8ZxLqEN-bWsv6528-N4gBLkY6pE",
  authDomain: "mujpyq.firebaseapp.com",
  projectId: "mujpyq",
  storageBucket: "mujpyq.appspot.com",
  messagingSenderId: "146900230087",
  appId: "1:146900230087:web:24569f239b58bf2f2803e2",
  measurementId: "G-G8MMQNKMCP"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
 const auth = getAuth(app);

 export default app; 