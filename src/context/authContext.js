import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const AuthContext = createContext()
export const exit = () => {
    localStorage.removeItem('user')
}
export const AuthProvider = ({ children }) => {
    let storedData = localStorage.getItem('user');
    let currentUser;
  
    try {
      currentUser = storedData ? JSON.parse(storedData) : null;
    } catch (error) {
      currentUser = null;
    }

    const [email, setEmail] = useState('')
    const [user, setUser] = useState(currentUser)
    const [password, setPassword] = useState('')
    return (
        <AuthContext.Provider
            value={{
                email,
                setEmail,
                password,
                setPassword,
                user,
                setUser,
                exit,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.object.isRequired,
}
