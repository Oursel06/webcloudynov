import { RootSiblingParent } from 'react-native-root-siblings';
import React from 'react';
import { Link } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
    return (
        <RootSiblingParent>
            <View style={styles.container}>
                <Text>Accueil</Text>
                <br></br>
                <Link style={styles.link} href="/connexion">Connexion</Link>
                <Link style={styles.link} href="/inscription">Inscription</Link>
            </View>
        </RootSiblingParent>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        borderRadius: 100,
        margin: 100,
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '1px 2px 5px 5px rgba(50, 50, 50, 0.1)',
    },
    link: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 10,
        margin: 5,
        color: '#eee',
    },
});