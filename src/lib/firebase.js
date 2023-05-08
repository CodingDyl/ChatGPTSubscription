import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABqLy2LFmjUdNlxDPnfDJX3HBV8UE2Xgo",
  authDomain: "whatsappgpt-f9e8d.firebaseapp.com",
  projectId: "whatsappgpt-f9e8d",
  storageBucket: "whatsappgpt-f9e8d.appspot.com",
  messagingSenderId: "117700601010",
  appId: "1:117700601010:web:903e8af8219176131cd5ab",
  measurementId: "G-03QZRVX5W2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getDatabase(app);

// Function to create a new user account and store user data in the database
export const signUpWithEmailAndPassword = async ({ name, lastName, email, phone, password }) => {
  try {
    // Create the user account
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Store the user data in the database
    await set(ref(db, `users/${phone}`), {
      name,
      lastName,
      email,
      phone,
      password,
    });

    // Return the user object
    return user;
  } catch (error) {
    // Handle errors
    console.error(error);
    throw error;
  }
}

