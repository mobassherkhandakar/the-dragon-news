import React from 'react';
import { createContext } from 'react';

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

  const authInfo ={
    user: null
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;