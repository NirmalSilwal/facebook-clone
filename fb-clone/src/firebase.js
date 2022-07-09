// note this is for version 9 and above - see firebase version in package.json
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8c2QecMH2LgmLXrDz2-UxkhfobSQZCn0",
  authDomain: "facebook-clone-24782.firebaseapp.com",
  projectId: "facebook-clone-24782",
  storageBucket: "facebook-clone-24782.appspot.com",
  messagingSenderId: "136795089450",
  appId: "1:136795089450:web:9b17e9e2a234b69c4cf153",
  measurementId: "G-9SVTYTKYJC",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth = getAuth();

const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
