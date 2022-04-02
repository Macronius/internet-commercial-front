
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
import { initializeApp } from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries
import { 
    createUserWithEmailAndPassword,
    getAuth, 
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";

// NOTE: Database-firestore is another service
import {
    getFirestore, //firestore db class to instantiate
    doc,        // get a document instance
    getDoc,     // access document's data
    setDoc,     // set document's data
} from 'firebase/firestore';





// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOvePzL0fzUOsuGwyPlvkPvFk1BZZOz0A",
  authDomain: "internet-commercial-front.firebaseapp.com",
  projectId: "internet-commercial-front",
  storageBucket: "internet-commercial-front.appspot.com",
  messagingSenderId: "91590816225",
  appId: "1:91590816225:web:c9cd9bcb987ddfa0b6a2a0"
};





// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


// Initialize a provider instance using the GoogleAuthProvider class
export const auth = getAuth();

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account",   //force user to select an account with every interaction
}) // "takes some kind of configuration object and tell different ways we want the google auth googleProvider to behave"





export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider); //NOTE: a redirect to a completely separate page is permission for current page to unmount, as it does not know when/if user will return.  For this reason, use getRedirectResult instead

export const signInWithGoogleEmailPassword = () => signInWithEmailAndPassword(auth, googleProvider);





// create the db (instantiate the firestore) in order to use to access the database
export const db = getFirestore();





//
export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {},
) => {
    
    if (!userAuth) return;

    //note: user.uid is a unique object identifier, check if already pulled the collection this time
    const userRefDoc = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userRefDoc);  //read the data

    // if user doesn't already exist, then create a new user
    if (!userSnapshot.exists()) {
        const {displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc( userRefDoc, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        }
        catch(error) {
            console.log("There was an error creating the user: ", error.message)
        }
    }

    return userRefDoc;
};





// create an interface-layer with a helper function
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};


export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}




// USER CONTEXT STUFF
// USER SIGNS OUT OF THEIR ACCOUNT ACCESS
export const signOutUser = async () => {
    await signOut(auth);
}


// HELPER FUNCTION: observer listener for better useContext
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);