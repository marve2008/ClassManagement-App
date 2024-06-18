import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase/Firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [logIn, setLogIn] = useState(false);
  const [loading, setLoading] = useState(true);
  //   useEffect(() => {
  //     const unSubcribe = onAuthStateChanged(auth, initializeUser);
  //     return unSubcribe;
  //   }, []);
  //   async function initializeUser(user) {
  //     if (user) {
  //       setCurrentUser({ ...user });
  //       setLogIn(true);
  //     } else {
  //       setCurrentUser(null);
  //       setLogIn(false);
  //     }
  //     setLoading(false);
  //   }
  async function handleLogin(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      return user;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  return (
    <AuthContext.Provider value={{ handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
