import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const app = initializeApp({
    apiKey: "AIzaSyBEQFYaktf8uqnoJXdEjXykFB5p_gViON0",
    authDomain: "free-enneagram.firebaseapp.com",
    projectId: "free-enneagram",
    storageBucket: "free-enneagram.appspot.com",
    messagingSenderId: "494730549634",
    appId: "1:494730549634:web:f18d2789486054a170d79b",
    measurementId: "G-T9NB4QX5PG"
});

const analytics = getAnalytics(app);
const firestore = getFirestore(app);

const Firebase = {
    app : app,
    analytics : analytics,
    firestore : firestore,
}


export { app, analytics, firestore };
export default Firebase;
