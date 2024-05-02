import "./firebaseConfig";
import { getFirestore } from "firebase/firestore";
import { getDoc, doc } from "firebase/firestore";

const db = getFirestore();

export const getOnePostData = async (id) => {
    const docRef = doc(db, "posts", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document => " + docSnap.data());
        return docSnap.data();
    }
    else {
        console.log("Aucun doc !");
    }
}
