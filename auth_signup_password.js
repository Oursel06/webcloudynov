import "./firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
export const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            const user = userCredentials.user;
            console.log(user);
            console.log("signup success");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error0);
        });
}