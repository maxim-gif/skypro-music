import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();
export const exit = () => {
  localStorage.removeItem('user');
}
export const AuthProvider = ({ children }) => {

  let currentUser = localStorage.getItem('user')
  currentUser = JSON.parse(currentUser)

  const [email, setEmail] = useState('');
  const [user, setUser] = useState(currentUser);
  const [password, setPassword] = useState('');
  return (
    <AuthContext.Provider value={{ email, setEmail, password, setPassword, user, setUser, exit}}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
    children: PropTypes.object.isRequired,
  };