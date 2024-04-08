// auth.js
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from './firebase'; // Import Firebase app instance from firebase.js
const auth  = getAuth(app)
 
// Authentication functions
export const signUp = async (email, password) => {
  // Use the authentication instance initialized with the Firebase app instance
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
    return {message:"User created successfully"}
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
};

export const signIn = async (email, password) => {
  // Use the authentication instance initialized with the Firebase app instance
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
};

export const signOutUser = async () => {
  // Use the authentication instance initialized with the Firebase app instance
};
