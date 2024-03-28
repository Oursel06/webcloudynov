import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { signup } from './auth_signup_password';

export default function App() {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput style={styles.input} onChangeText={onChangeEmail} value={email}></TextInput>
      <TextInput>password</TextInput>
      <TextInput style={styles.input} onChangeText={onChangePassword} value={password} secureTextEntry={true}></TextInput>
      <Button title="Connexion" onPress={() => signup(email, password)}></Button>
    </View>
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
  }
});