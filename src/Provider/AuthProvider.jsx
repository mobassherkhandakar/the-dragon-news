import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
  const auth = getAuth(app)

  const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const authInfo ={
    user: null,
    createUser,
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;