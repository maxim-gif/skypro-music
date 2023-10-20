import { configureStore } from '@reduxjs/toolkit'
import trackReducer from './reducers/track.js'

export const store = configureStore({
    reducer: {
        playerControl: trackReducer,
    },
})
