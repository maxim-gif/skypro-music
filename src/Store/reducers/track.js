import {
    SWITCH_NEXT_TRACK,
    SWITCH_PREVIOUS_TRACK,
    SHAKE_TRACK,
    SET_TRACK,
    SET_TRACK_ARR,
    SET_STATUS_PLAY,
    SET_CLEAR_TRACK,
    SET_STARRED_TRACK,
} from '../actions/types/track.js'

const initialState = {
    starredTrack: [],
    trackArr: [],
    track: {},
    shake: false,
    shakePlaylist: [],
    playing: false,
}

export default function trackReducer(state = initialState, action) {
    switch (action.type) {
        case SWITCH_NEXT_TRACK: {
            let currentIndex = 0
            if (state.shake) {
                currentIndex = state.shakePlaylist.findIndex(
                    (track) => track.id === state.track.id,
                )
            } else {
                currentIndex = state.trackArr.findIndex(
                    (track) => track.id === state.track.id,
                )
            }

            let nextTrack = state.track

            if (currentIndex + 1 < state.trackArr.length) {
                if (state.shake) {
                    nextTrack = state.shakePlaylist[currentIndex + 1]
                } else {
                    nextTrack = state.trackArr[currentIndex + 1]
                }
            }

            return {
                ...state,
                track: nextTrack,
                playing: true,
            }
        }

        case SWITCH_PREVIOUS_TRACK: {
            let currentIndex = 0
            if (state.shake) {
                currentIndex = state.shakePlaylist.findIndex(
                    (track) => track.id === state.track.id,
                )
            } else {
                currentIndex = state.trackArr.findIndex(
                    (track) => track.id === state.track.id,
                )
            }

            let previousTrack = state.track

            if (currentIndex - 1 >= 0) {
                if (state.shake) {
                    previousTrack = state.shakePlaylist[currentIndex - 1]
                } else {
                    previousTrack = state.trackArr[currentIndex - 1]
                }
            }

            return {
                ...state,
                track: previousTrack,
            }
        }

        case SHAKE_TRACK: {
            const shuffledPlaylist = [...state.trackArr].sort(
                () => Math.random() - 0.5,
            )
            return {
                ...state,
                shake: !state.shake,
                shakePlaylist: shuffledPlaylist,
            }
        }

        case SET_TRACK: {
            const { tracks } = action.payload
            return {
                ...state,
                track: tracks,
                playing: true,
            }
        }

        case SET_CLEAR_TRACK: {
            return {
                ...state,
                track: {}
            }
        }

        case SET_TRACK_ARR: {
            const { tracks } = action.payload
            return {
                ...state,
                trackArr: tracks,
            }
        }

        case SET_STARRED_TRACK: {
            const { tracks } = action.payload
            return {
                ...state,
                starredTrack: tracks,
            }
        }

        case SET_STATUS_PLAY: {
            return {
                ...state,
                playing: !state.playing,
            }
        }

        default:
            return state
    }
}
