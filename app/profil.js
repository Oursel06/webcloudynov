import { RootSiblingParent } from 'react-native-root-siblings';
import React from 'react';
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet, Text, View, Image } from 'react-native';
import { getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { uploadToFirebase } from '../storage_upload_file';
import { Link } from 'expo-router';
import { Button } from 'react-native-web';

export default function App() {

    const auth = getAuth();
    const user = auth.currentUser;
    const [image, setImage] = React.useState(null);

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

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);

            const { uri } = result.assets[0];
            const fileName = uri.split("/").pop();
            const uploadResp = await uploadToFirebase(uri, fileName);
            let res = await updateUserPhotoUrl(uploadResp);
            if (res) {
                console.log(res);
                setUser({ ...user, photoURL: uploadResp })
            } else {
                console.log("erreur lors de la récupération de l'image");
            };
        }
    };

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
            {user ?
                <View style={styles.container}>
                    <Text>Nom d'utilisateur : {user.displayName}</Text>
                    <Text>Email : {user.email}</Text>
                    <Text>Numéro de téléphone : {user.phoneNumber}</Text>
                    <Text>Avatar :</Text>
                    <Image
                        style={styles.image}
                        source={{
                            uri: user.photoURL,
                        }}
                    />
                    {image && <Image source={{ uri: image }} style={styles.image} />}
                    <Button title="Choisir une image" onPress={pickImage} />
                </View>
                :
                <View style={styles.container}>
                    <Text>Vous n'êtes pas conecté.</Text>
                    <Link href="/connexion">Se connecter</Link>
                </View>}
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
    },
    image: {
        width: 200,
        height: 200,
    },
});