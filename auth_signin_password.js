// import Toast from "react-native-root-toast";
import { router } from "expo-router";
import "./firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
export const signin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            const user = userCredentials.user;
            console.log(user);
            router.replace('/profil');
        })
        .catch((error) => {
            console.log(error.message);
        });
}