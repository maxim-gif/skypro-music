import {
    SWITCH_NEXT_TRACK,
    SWITCH_PREVIOUS_TRACK,
    SHAKE_TRACK,
    SET_TRACK,
    SET_TRACK_ARR,
    SET_STATUS_PLAY,
    SET_CLEAR_TRACK,
    SET_STARRED_TRACK,
    SET_COMPILATION_ID_TRACK,
    SET_FILTERED_TRACK,
} from '../types/track.js'

export const switchNextTrack = () => ({
    type: SWITCH_NEXT_TRACK,
})

export const switchPreviousTrack = () => ({
    type: SWITCH_PREVIOUS_TRACK,
})

export const shakeTrack = () => ({
    type: SHAKE_TRACK,
})

export const setTrack = (tracks) => ({
    type: SET_TRACK,
    payload: {
        tracks,
    },
})

export const setTrackArr = (tracks) => ({
    type: SET_TRACK_ARR,
    payload: {
        tracks,
    },
})

export const setStarredTrack = (tracks) => ({
    type: SET_STARRED_TRACK,
    payload: {
        tracks,
    },
})

export const setFilteredTrack = (tracks) => ({
    type: SET_FILTERED_TRACK,
    payload: {
        tracks,
    },
})

export const setCompilationIdTrack = (tracks, id) => ({
    type: SET_COMPILATION_ID_TRACK,
    payload: {
        tracks,
        id,
    },
})

export const setStatusPlay = () => ({
    type: SET_STATUS_PLAY,
})

export const setClearTrack = () => ({
    type: SET_CLEAR_TRACK,
})
