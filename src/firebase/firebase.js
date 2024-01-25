
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDr90Zlp43NsBaAXYzJmVGBY8N6lk8EzJU",
    authDomain: "portfolio-6e065.firebaseapp.com",
    projectId: "portfolio-6e065",
    storageBucket: "portfolio-6e065.appspot.com",
    messagingSenderId: "919975397638",
    appId: "1:919975397638:web:de08b0768016905276b687"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)