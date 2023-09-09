import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyBUqDyIHWLZxJlthsM9il5vrudhdmWmgE8",

  authDomain: "expense-tracker-12b78.firebaseapp.com",

  projectId: "expense-tracker-12b78",

  storageBucket: "expense-tracker-12b78.appspot.com",

  messagingSenderId: "350673652105",

  appId: "1:350673652105:web:5f526908f4c45d965c7958",
  
}
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)

// firebase login
// firebase init
// firebase deploy
