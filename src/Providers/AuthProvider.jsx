import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut,signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

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
        updateUser
    };

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
