import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDaPaOrpEyFtDnekgASG7kyoc45-AZPMu8",
  authDomain: "react-netflix-clone-e34b6.firebaseapp.com",
  projectId: "react-netflix-clone-e34b6",
  storageBucket: "react-netflix-clone-e34b6.appspot.com",
  messagingSenderId: "541860038342",
  appId: "1:541860038342:web:17cb26f8b60d072c5739c7",
  measurementId: "G-K79BCE7C7F"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);