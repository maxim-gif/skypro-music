import {
    SWITCH_NEXT_TRACK,
    SWITCH_PREVIOUS_TRACK,
    SHAKE_TRACK,
    SET_TRACK,
    SET_TRACK_ARR,
    SET_STATUS_PLAY,
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

export const setStatusPlay = () => ({
    type: SET_STATUS_PLAY,
})
