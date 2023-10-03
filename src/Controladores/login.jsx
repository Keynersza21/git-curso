import {  createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../components/Fireabse/firebase";


export const Login = () => {
    const register = ( email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    } 
    return {register}
}