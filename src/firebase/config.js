import firebase from "firebase";

import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBoe-12dvknJ_tt4JV114hDHsSss_yV-7w",
    authDomain: "olx-clone-4a6eb.firebaseapp.com",
    projectId: "olx-clone-4a6eb",
    storageBucket: "olx-clone-4a6eb.appspot.com",
    messagingSenderId: "529335763247",
    appId: "1:529335763247:web:ef7464bf4d7473918b61da",
    measurementId: "G-J20TBT2NQY"
  };

export default firebase.initializeApp(firebaseConfig);


