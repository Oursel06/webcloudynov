import { RootSiblingParent } from 'react-native-root-siblings';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth';

export default function App() {

    const auth = getAuth();
    const user = auth.currentUser;

    if (user !== null) {
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const emailverified = user.emailVerified;
        const uid = user.uid;
        console.log("displayName => " + displayName)
        console.log("email => " + email)
        console.log("photoURL => " + photoURL)
        console.log("emailverified => " + emailverified)
        console.log("uid => " + uid)
    }

    updateProfile(auth.currentUser, {
        displayName: "Alex06"
    }).then(() => {
        console.log("Profil MAJ !");
    }).catch((error) => {
        console.log("error => " + error);
    });

    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.id;
        } else {
            router.replace('/connexion');
        }
    })

    return (
        <RootSiblingParent>
            <View style={styles.container}>
                <Text>Profil</Text>
                <br></br>
                <Text> </Text>
            </View>
        </RootSiblingParent>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        borderRadius: 20,
        height: 40,
        width: 200,
        margin: 5,
    },
    link: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        margin: 5,
    },
    buttonText: {
        color: '#fff',
    },
    linkText: {
        color: 'blue',
    }
});