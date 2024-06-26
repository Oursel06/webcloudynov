import { RootSiblingParent } from 'react-native-root-siblings';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import { signwithgithub } from '../auth_signin_popup';
import { loginWithPhoneNumber } from '../auth_phone_signin';
import { verifyCode } from '../auth_verify_code';
import { signin } from '../auth_signin_password';

export default function App() {
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [phoneNumber, onChangePhoneNumber] = React.useState("");
    const [code, onChangeCode] = React.useState("");

    const handleSignin = () => {
        signin(email, password);
    };

    const handleSigninGitHub = () => {
        signwithgithub()
    };

    return (
        <RootSiblingParent>
            <View style={styles.container}>
                <Text>CONNEXION</Text>
                <br></br>
                <Text>Email</Text>
                <TextInput style={styles.input} onChangeText={onChangeEmail} value={email}></TextInput>
                <Text>Mot de passe</Text>
                <TextInput style={styles.input} onChangeText={onChangePassword} value={password} secureTextEntry={true}></TextInput>
                <TouchableOpacity style={styles.button} onPress={handleSignin}>
                    <View style={styles.buttonContent}>
                        <Text style={styles.linkText}>Connexion</Text>
                    </View>
                </TouchableOpacity>
                <br></br>
                <Text>------------- Ou se connecter avec -------------</Text>
                <br></br>
                <TouchableOpacity style={styles.link} onPress={handleSigninGitHub}>
                    <View style={styles.buttonContent}>
                        <Image source={require('../assets/github.png')} style={styles.logo} />
                        <Text style={styles.linkText}>GitHub</Text>
                    </View>
                </TouchableOpacity>
                <br></br>
                <Text>Numéro de téléphone</Text>
                <TextInput style={styles.input} onChangeText={onChangePhoneNumber} value={phoneNumber}></TextInput>
                <TouchableOpacity style={styles.link} onPress={() => loginWithPhoneNumber(phoneNumber)}>
                    <View style={styles.buttonContent}>
                        <Text style={styles.linkText}>Valider</Text>
                    </View>
                </TouchableOpacity>

                <div id='recaptcha-container'></div>

                <Text>code :</Text>
                <TextInput style={styles.input} onChangeText={onChangeCode} value={code}></TextInput>
                <TouchableOpacity style={styles.button} onPress={() => verifyCode(code)}>
                    <Text style={styles.buttonText}>Vérifier le code</Text>
                </TouchableOpacity>
                <br></br>
            </View >
        </RootSiblingParent >

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

    link: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        margin: 5,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        cursor: 'pointer',
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    logo: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    linkText: {
        color: 'black',
    },

});