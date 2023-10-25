import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import { useGetAccessTokenMutation } from '../services/api.js'
import { useDispatch } from 'react-redux'
import { setStarredTrack, setClearTrack, setCompilationIdTrack } from '../Store/actions/creators/track.js'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const dispatch = useDispatch()
    let storedData = localStorage.getItem('user')
    let currentUser

     const exit = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('refreshToken')
        dispatch(setClearTrack())
    }

    try {
        currentUser = storedData ? JSON.parse(storedData) : null
    } catch (error) {
        currentUser = null
    }
    const [email, setEmail] = useState('')
    const [searchEnable, setSearchEnable] = useState(true)
    const [user, setUser] = useState(currentUser)
    const [password, setPassword] = useState('')
    const [likeUpdated, setLikeUpdated] = useState(false);

    const Like = (id, key ) => {
             getAccessToken({ refresh: localStorage.getItem('refreshToken') })
                .unwrap()
                .then((result) => {
                    fetch(`https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`, {
                        method: key,
                        headers: {
                            Authorization: `Bearer ${result.access}`,
                        },
                        }).then(setLikeUpdated(prevState => !prevState))
                })
    }

 
    
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
            getAccessToken({ refresh: localStorage.getItem('refreshToken') })
                .unwrap()
                .then((result) => {
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
                    dispatch(setStarredTrack(json))
                    
                })
                .catch((error) => {
                    console.error('An error occurred:', error)
                    
                })
        });         
    }

    const handleGetCompilationsId = (id) => {
        return new Promise(() => {
            getAccessToken({ refresh: localStorage.getItem('refreshToken') })
                .unwrap()
                .then((result) => {
                    return fetch(
                        `https://skypro-music-api.skyeng.tech/catalog/selection/${id}/`,
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
                    console.log(json.items);
                    dispatch(setCompilationIdTrack(json.items, id))
                    
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
                Like,
                setLikeUpdated,
                handleGetCompilationsId,
                likeUpdated,
                
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.object.isRequired,
}
