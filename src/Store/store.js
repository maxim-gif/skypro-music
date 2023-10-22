import { configureStore } from '@reduxjs/toolkit'
import trackReducer from './reducers/track.js'
import thunk from "redux-thunk"

export const store = configureStore({
    reducer: {
        playerControl: trackReducer,
    },
    middleware: [thunk],
})
