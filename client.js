import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, addDoc, collection } from 'firebase/firestore';


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";




const firebaseConfig = {
  apiKey: "API_KEY_HERE(Dont expose api publically)",
  authDomain: "whatsappgpt-f9e8d.firebaseapp.com",
  databaseURL: "https://whatsappgpt-f9e8d-default-rtdb.firebaseio.com",
  projectId: "whatsappgpt-f9e8d",
  storageBucket: "whatsappgpt-f9e8d.appspot.com",
  messagingSenderId: "117700601010",
  appId: "1:117700601010:web:ced412d231b1c9c21cd5ab",
  measurementId: "G-6DSB17B6VQ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

export const signUpWithEmailAndPassword = async ({ name, lastName, email, phone, password }) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await addDoc(collection(db, `Users/${phone}`), {
      name,
      lastName,
      email,
      phone,
      password,
    });

    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const signIn = async ({email, password}) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      return user;
    } catch (error) {
      console.error(error);
      throw error;
    }
}

export const logout = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

