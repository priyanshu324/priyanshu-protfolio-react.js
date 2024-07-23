import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLs8RmrTBrUOlRekY5BrOe3kYOjYOT_UQ",
  authDomain: "protofilo-priyanshu.firebaseapp.com",
  projectId: "protofilo-priyanshu",
  storageBucket: "protofilo-priyanshu.appspot.com",
  messagingSenderId: "883100364043",
  appId: "1:883100364043:web:26d948e21456421f54460e"
};


export const app = initializeApp(firebaseConfig);

export const db = getFirestore();