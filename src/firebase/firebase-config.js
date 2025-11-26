import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBBAFOf5zPuZ_rdFK8oZCyHdyiC88zMgdA",
  authDomain: "applibros-e88f0.firebaseapp.com",
  databaseURL: "https://applibros-e88f0-default-rtdb.firebaseio.com",
  projectId: "applibros-e88f0",
  storageBucket: "applibros-e88f0.firebasestorage.app",
  messagingSenderId: "87316405080",
  appId: "1:87316405080:web:51a006992ad5a60e1c232d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
