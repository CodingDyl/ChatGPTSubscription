import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyABqLy2LFmjUdNlxDPnfDJX3HBV8UE2Xgo",
    authDomain: "whatsappgpt-f9e8d.firebaseapp.com",
    projectId: "whatsappgpt-f9e8d",
    storageBucket: "whatsappgpt-f9e8d.appspot.com",
    messagingSenderId: "117700601010",
    appId: "1:117700601010:web:59b636bc65ebc4291cd5ab",
    measurementId: "G-WL07Q0M8NS"
  };

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
    await set(ref(db, `users/${user.uid}`), {
      Email_Address: email,
      FirstName: name,
      SecondName: lastName,
      Phone_Number: phone,
      Password: password,
    });

    // Return the user object
    return user;
  } catch (error) {
    // Handle errors
    console.error(error);
    throw error;
  }
}

