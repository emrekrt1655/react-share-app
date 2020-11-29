import { PinDropSharp } from '@material-ui/icons';
import {createContext, useState, useEffect} from 'react';
import firebase from '../firebase/firebase.utils';


export const FirebaseAuthContext = createContext();

const AuthContextProvider = (props) => {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState();

    useEffect(()=>{
        firebase.firebaseAuth.onAuthStateChanged((user)=>{
            console.log('user', user);
            setCurrentUser(user);
        })
    })

    return(
        <FirebaseAuthContext.Provider value={{currentUser}}>
            {props.children}
        </FirebaseAuthContext.Provider>
    );
};

export default AuthContextProvider;