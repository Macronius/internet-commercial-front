


import { createContext, useEffect, useState } from 'react';

import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../utilities/firebase.utility';



export const UserContext = createContext({
    // DEFAULT STATE
    currentUser: null,  //NOTE: an empty object still evaluates to true, hence 'null'
    setCurrentUser: () => null, // should be called resetCurrentUser?
});


export const UserProvider = ( {children} ) => {
    
    const [currentUser, setCurrentUser] = useState(null);

    const userValue = {currentUser, setCurrentUser};

    useEffect( () => {
        const unsubscribe = onAuthStateChangedListener( (user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            
            setCurrentUser(user);
            // console.log(user);
        });

        return unsubscribe

    }, []);


    return <UserContext.Provider value={userValue}>{children}</UserContext.Provider>
}


//NOW: go to index.js and wrap <App /> in the UserContext component