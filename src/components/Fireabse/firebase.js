
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCiM2gMrWbdut5uzRiVp32TZR-7WJSgqQ0",
  authDomain: "git-login-e5987.firebaseapp.com",
  projectId: "git-login-e5987",
  storageBucket: "git-login-e5987.appspot.com",
  messagingSenderId: "390718329770",
  appId: "1:390718329770:web:e20ca5d61a969be27ed1d3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)