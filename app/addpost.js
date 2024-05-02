import React, { useState, useEffect } from "react";
import { StyleSheet, Pressable, TextInput, Text, View } from 'react-native';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Link } from "expo-router";
import { createPost } from "../addpost";

export default function App() {

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [user, setUser] = useState(null)

    const auth = getAuth();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user)
                setUser(user);
            } else {
                setUser(null);
            }
        });
    }, [])

    if (user) {
        return (
            <View style={styles.container}>
                <Text>Titre</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setTitle}
                    value={title}
                ></TextInput>
                <Text>Description</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setText}
                    value={text}
                ></TextInput>
                <Pressable onPress={() => createPost(title, text, user.uid)} style={styles.button}>
                    <Text>Ajouter</Text>
                </Pressable>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <Text>Veuillez vous <Link style={styles.link} href="/connexion">connecter</Link> pour pouvoir ajouter un post</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    link: {
        color: 'blue'
    },
    input: {
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10
    },
    button: {
        backgroundColor: 'blue',
        minWidth: 100,
        minHeight: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonLabel: {
        color: 'white',
        fontWeight: 700
    }
});