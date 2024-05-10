import { RootSiblingParent } from 'react-native-root-siblings';
import React, { useState, useEffect } from "react";
import { Link } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';
import { getPostData } from '../getpost';

export default function App() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const data = await getPostData();
            setPosts(data);
        }
        fetchData();
    }, [])

    return (
        <RootSiblingParent>
            <View style={styles.container}>
                <Text>Bienvenue !</Text>
                {posts.length == 0 ?
                    <> <Text>Vous n'avez pas de post</Text> </> :
                    <> <Text>Liste de {posts.length} post(s)</Text>
                        <View style={styles.listposts}>
                            {posts.map((p) => {
                                return (
                                    <View key={p.id} style={styles.item}>
                                        <Text style={styles.itemTitle}>{p.title}</Text>
                                        <Text>{p.text}</Text>
                                    </View>
                                );
                            })}
                        </View>
                    </>
                }
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
    listposts: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: '20px',
    },
    item: {
        border: 'solid 1px lightgrey',
        padding: '10px',
        margin: '10px',
        backgroundColor: 'whitesmoke',
        cursor: 'pointer',
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