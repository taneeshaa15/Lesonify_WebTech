import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import firebaseConfig from "./firebase.config";
const initializeFirebase = () => {
    initializeApp(firebaseConfig);
}
export default initializeFirebase;

export const db = getFirestore(initializeApp(firebaseConfig));
export const storage=getStorage(initializeApp(firebaseConfig));
export const app = initializeApp(firebaseConfig);