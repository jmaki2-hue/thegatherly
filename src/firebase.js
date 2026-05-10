import { initializeApp } from "firebase/app";

import {
  getAuth
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQ4StvFI5xpLFTW2bxy31cWTlw386fHf0",
  authDomain: "the-gatherly.firebaseapp.com",
  projectId: "the-gatherly",
  storageBucket: "the-gatherly.firebasestorage.app",
  messagingSenderId: "618554520546",
  appId: "1:618554520546:web:9e7f3765ddb61120f57fbb",
  measurementId: "G-TZNEKMY5NM"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);