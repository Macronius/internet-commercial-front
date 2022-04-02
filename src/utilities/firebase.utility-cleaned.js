
import { initializeApp } from "firebase/app";

import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from "firebase/auth";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore';



// ====== INITIALIZE THE APPLICATION
const firebaseConfig = {
  apiKey: "AIzaSyDOvePzL0fzUOsuGwyPlvkPvFk1BZZOz0A",
  authDomain: "internet-commercial-front.firebaseapp.com",
  projectId: "internet-commercial-front",
  storageBucket: "internet-commercial-front.appspot.com",
  messagingSenderId: "91590816225",
  appId: "1:91590816225:web:c9cd9bcb987ddfa0b6a2a0"
};

const firebaseApp = initializeApp(firebaseConfig);





// ====== AUTHENTICATION - GOOGLE POPUP
export const auth = getAuth(); //QUESTION: why export this?

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account",
})

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);





// ====== DATABASE
export const db = getFirestore(); //QUESTION:whyExportThis?

export const createUserDocumentFromAuth = async (userAuth) => {
    // console.log("userAuth: ", userAuth);
    
    //gain reference to document(collection)
    const userDocRef = doc(db, 'users', userAuth.uid);
    // console.log("userDocRef: ", userDocRef);

    //read the data
    const userSnapshot = await getDoc(userDocRef);
    // console.log(userSnapshot);
    // console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {

        const {displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(
                userDocRef, 
                {
                    displayName,
                    email,
                    createdAt
                }
            );
        }
        catch(error) {
            console.log("There was an error creating the user: ", error.message)
        }
    }

    // return userDocRef;
}