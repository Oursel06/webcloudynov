import React, { useState, useEffect } from "react";
import "../firebaseConfig";
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Link } from 'expo-router';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default function Header() {
    const [user, setUser] = useState(null)
    const auth = getAuth();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
    }, [])

    const logout = () => {
        signOut(auth);
        router.replace('/connexion');
    }
    return (
        <NavigationContainer independent={true}>
            <View style={styles.container}>
                <Link style={styles.links} href="/">Accueil</Link>
                {user ? <>
                    <Link style={styles.links} href="/profil">Profil</Link>
                    <Pressable onPress={logout}>
                        <Text style={styles.links}>Déconnexion</Text>
                    </Pressable>
                </> : <>
                    <Link style={styles.links} href="/connexion">Connexion</Link>
                    <Link style={styles.links} href="/inscription">Inscription</Link>
                </>}

            </View>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        height: "80px",
        width: "100%",
        backgroundColor: 'whitesmoke',
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: 'lightgrey',
        alignItems: 'center',
        padding: '10px',
    },
    links: {
        marginHorizontal: '20px',
        textTransform: 'uppercase',
        fontSize: '18px',
    }
});