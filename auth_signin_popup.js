import "./firebaseConfig";
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { provider } from "./auth_github_provider_create";

const auth = getAuth();
export const signwithgithub = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential.token;
            const user = result.user;
        })
        .catch((error) => {
            const credential = GithubAuthProvider.credentialFromError(error)
        });
}