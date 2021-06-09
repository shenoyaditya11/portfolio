import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBFHhrNRGlS8AP_2fuf9zh5yt-NWfxoN2Y",
    authDomain: "sgpalyacasino.firebaseapp.com",
    databaseURL: "https://sgpalyacasino.firebaseio.com",
    projectId: "sgpalyacasino",
    storageBucket: "sgpalyacasino.appspot.com",
    messagingSenderId: "844768123403",
    appId: "1:844768123403:web:90d88ab1f740d6f8e2c50e"
};


firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const firebasestorage = firebase.storage();
