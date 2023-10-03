import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../components/Fireabse/firebase";


export const Login = () => {
    const register = ( email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    } 

    const iniciar = ( email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        onAuthStateChanged(auth, (user) =>{
            let usuario = user.uid
            localStorage.setItem('idToke', usuario.email)
        })
    } 
    return {register, iniciar}
}