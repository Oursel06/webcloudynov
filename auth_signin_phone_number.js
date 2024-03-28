import Toast from "react-native-root-toast";
import "./firebaseConfig";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";

const auth = getAuth();
export const signinphonenumber = (auth, phoneNumber, appVerifier) => {
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
            Toast.show("Un SMS vient d'être envoyé à " + phoneNumber, {
                duration: Toast.durations.SHORT,
                position: Toast.positions.BOTTOM,
                shadow: true,
                animation: false,
                hideOnPress: true,
            });
            window.confirmationResult = confirmationResult;
            const code = getCodeFromUserInput();
            confirmationResult.confirm(code).then((result) => {
                const user = result.user;
                Toast.show("Code OK !", {
                    duration: Toast.durations.SHORT,
                    position: Toast.positions.BOTTOM,
                    shadow: true,
                    animation: false,
                    hideOnPress: true,
                });
            }).catch((error) => {
                Toast.show("Mauvais code", {
                    duration: Toast.durations.SHORT,
                    position: Toast.positions.BOTTOM,
                    shadow: true,
                    animation: false,
                    hideOnPress: true,
                });
            });
        }).catch((error) => {
            Toast.show("Impossible d'envoyer le SMS", {
                duration: Toast.durations.SHORT,
                position: Toast.positions.BOTTOM,
                shadow: true,
                animation: false,
                hideOnPress: true,
            });
        });
}
