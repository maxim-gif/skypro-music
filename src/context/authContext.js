import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState('');
  return (
    <AuthContext.Provider value={{ email, setEmail, password, setPassword, user, setUser, }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
    children: PropTypes.object.isRequired,
  };