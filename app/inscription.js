import { RootSiblingParent } from 'react-native-root-siblings';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { signup } from '../auth_signup_password';

export default function App() {
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
        return passwordRegex.test(password);
    };

    const handleSignup = () => {
        if (!validateEmail(email)) {
            console.log("mail invalide");
        } else if (!validatePassword(password)) {
            console.log("Le mot de passe doit contenir au moins 8 caractères avec au moins une majuscule et un chiffre")
        } else {
            signup(email, password);
        }
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
                <TouchableOpacity style={styles.button} onPress={handleSignup}>
                    <Text style={styles.buttonText}>Inscription</Text>
                </TouchableOpacity>
                <br></br>
                <Link style={styles.link} href="/">Retour</Link>
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