import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/Firebase"



export const doSiginWithEmailAndPassword = () => {
    return signInWithEmailAndPassword(auth, email, password)
}