import { RootSiblingParent } from 'react-native-root-siblings';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { signup } from './auth_signup_password';
import { signin } from './auth_signin_password';
import { signwithgithub } from './auth_signin_popup';
import Toast from 'react-native-root-toast';

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
      Toast.show("Mail invalide", {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: false,
        hideOnPress: true,
      });
    } else if (!validatePassword(password)) {
      Toast.show("Le mot de passe doit contenir au moins 8 caractères avec au moins une majuscule et un chiffre", {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: false,
        hideOnPress: true,
      });
    } else {
      signup(email, password);
    }
  };

  const handleSignin = () => {
    signin(email, password);
  };

  const handleSigninGitHub = () => {
    signwithgithub()
  };

  return (
    <RootSiblingParent>
      <View style={styles.container}>
        <Text>Email</Text>
        <TextInput style={styles.input} onChangeText={onChangeEmail} value={email}></TextInput>
        <Text>Mot de passe</Text>
        <TextInput style={styles.input} onChangeText={onChangePassword} value={password} secureTextEntry={true}></TextInput>
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Inscription</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSignin}>
          <Text style={styles.buttonText}>Connexion</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleSigninGitHub}>
          <Text style={styles.buttonText}>Connexion avec GitHub</Text>
        </TouchableOpacity>

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
  buttonText: {
    color: '#fff',
  }
});
//test