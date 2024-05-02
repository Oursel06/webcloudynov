// import React, { useState, useEffect } from "react";
// import "./firebaseConfig";
// import { collection, query, where, getDocs } from "firebase/firestore";
// import { Text, View } from "react-native-web";
// import { useLocalSearchParams } from "expo-router";
// import { getOnePostData } from "../getonepost";

// export default function NewPost() {
//     const [post, setPosts] = useState(null);
//     const local = useLocalSearchParams();

//     const q = query(collection(db, "posts"), where("posts", "==", postId));

//     const querySnapshot = await getDocs(q);

//     useEffect(() => {
//         const fetchPost = async () => {
//             let res = await getOnePostData(local.postId);
//             console.log(res);
//             setPosts(res);
//         }
//         fetchPost();
//     }, [local, postId])

//     if (post) {
//         return (
//             <View>
//                 <Text>Titre : {post.title}</Text>
//                 <Text>Description : {post.text}</Text>
//             </View>
//         )
//     }
//     else {
//         console.log("Aucun doc !")
//     }
// }