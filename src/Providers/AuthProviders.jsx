import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null)


const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [drpDown, setDropDown] = useState(false)
    const [drpDownGlobal, setDrpDownGlobal] = useState(false)

    const auth = getAuth(app);


    const socialLogIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const profile = (name, photo) => {
        // setLoading(false)
        return (
            updateProfile(auth.currentUser, {
                displayName: name, photoURL: photo
            })
        )
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    };
    const handleDropdown = (dropdown) => {
        return setDropDown(!dropdown)
    }
  

    const info = {
        socialLogIn,
        createUser,
        user,
        logInUser,
        logOut,
        loading,
        profile,
        drpDown,
        handleDropdown,
        drpDownGlobal,
        setDrpDownGlobal,
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;