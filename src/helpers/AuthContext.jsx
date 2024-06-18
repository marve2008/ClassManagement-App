import React, { useState, useEffect } from "react";
import { auth } from "../firebase/Firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [logIn, setLogIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setLogIn(true);
      } else {
        setCurrentUser(null);
        setLogIn(false);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const handleLogin = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setCurrentUser(user);
      setLogIn(true);
      return { user };
    } catch (error) {
      console.error(error);
      return { error };
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, logIn, handleLogin }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};