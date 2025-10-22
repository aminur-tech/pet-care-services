import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut,signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
     const googleProvider = new GoogleAuthProvider();

    // Create user with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const updateUser = (updateUser)=>{
        return updateProfile(auth.currentUser, updateUser )
    }

    // sign in google
    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    // logOut
    const logOut=()=>{
        return signOut(auth)
    }

    // Track the current logged-in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser); // ✅ Corrected (was setUser(user))
            setLoading()
        });
        return () => unsubscribe();
    }, []);

    const userInfo = {
        user,
        setUser,
        createUser,
        logOut,
        signInUser,
        loading,
        updateUser,
        googleSignIn
    };

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
