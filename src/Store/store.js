import { configureStore } from '@reduxjs/toolkit'
import trackReducer from './reducers/track.js'

import { api } from '../services/api.js'

export const store = configureStore({
    reducer: {
        playerControl: trackReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})
