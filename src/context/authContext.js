import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import { useGetAccessTokenMutation } from '../services/api.js'
import { useDispatch } from 'react-redux'
import { setTrackArr } from '../Store/actions/creators/track.js'

export const AuthContext = createContext()
export const exit = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('refreshToken')
}
export const AuthProvider = ({ children }) => {
    let storedData = localStorage.getItem('user')
    let currentUser

    try {
        currentUser = storedData ? JSON.parse(storedData) : null
    } catch (error) {
        currentUser = null
    }
    const [email, setEmail] = useState('')
    const [searchEnable, setSearchEnable] = useState(true)
    const [user, setUser] = useState(currentUser)
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const [getAccessToken] = useGetAccessTokenMutation()
    // const handleGetCompilationsFavorite = () => {
    //     console.log(localStorage.getItem('refreshToken'))
    //     getAccessToken({ refresh: localStorage.getItem('refreshToken') })
    //         .unwrap()
    //         .then((result) => {
    //             console.log(`Bearer ${result.access}`)
    //             fetch(
    //                 'https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/',
    //                 {
    //                     method: 'GET',
    //                     headers: {
    //                         Authorization: `Bearer ${result.access}`,
    //                     },
    //                 },
    //             )
    //                 .then((response) => response.json())
    //                 .then((json) => dispatch(setTrackArr(json)))
    //             // refetch({ headers: { Authorization: `Bearer ${result.access}` } })
    //             //     .then((result) => {
    //             //         console.log(result)
    //             //     })
    //             //     .catch((error) => {
    //             //         console.error('An error occurred:', error)
    //             //     })
    //         })
    //         .catch((error) => {
    //             console.error('An error occurred:', error)
    //         })
    // }
    const handleGetCompilationsFavorite = () => {
        return new Promise(() => {
            console.log(localStorage.getItem('refreshToken'))
            getAccessToken({ refresh: localStorage.getItem('refreshToken') })
                .unwrap()
                .then((result) => {
                    console.log(`Bearer ${result.access}`)
                    return fetch(
                        'https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/',
                        {
                            method: 'GET',
                            headers: {
                                Authorization: `Bearer ${result.access}`,
                            },
                        },
                    )
                })
                .then((response) => response.json())
                .then((json) => {
                    dispatch(setTrackArr(json))
                    
                })
                .catch((error) => {
                    console.error('An error occurred:', error)
                    
                })
        });         
    }


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
                searchEnable,
                setSearchEnable,
                handleGetCompilationsFavorite,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.object.isRequired,
}
