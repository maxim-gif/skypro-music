    import {
        SWITCH_NEXT_TRACK,
        SWITCH_PREVIOUS_TRACK,
        SHAKE_TRACK,
        SET_TRACK,
        SET_TRACK_ARR,
        SET_STATUS_PLAY,
    } from '../actions/types/track.js'


    const initialState = {
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
                    currentIndex = state.shakePlaylist.findIndex(track => track.id === state.track.id);
                } else {
                    currentIndex = state.trackArr.findIndex(track => track.id === state.track.id);
                }
                
                let nextTrack = state.track;

                if (currentIndex + 1 < state.trackArr.length) {
                    nextTrack = state.trackArr[currentIndex + 1];
                }
            
                return {
                    ...state,
                    track: nextTrack,
                };
            }

            case SWITCH_PREVIOUS_TRACK: {
                let currentIndex = 0
                if (state.shake) {
                    currentIndex = state.shakePlaylist.findIndex(track => track.id === state.track.id);
                } else {
                    currentIndex = state.trackArr.findIndex(track => track.id === state.track.id);
                }
                
                
                let previousTrack = state.track;

                if (currentIndex - 1 >= 0) {
                    previousTrack = state.trackArr[currentIndex - 1];
                }
            
                return {
                    ...state,
                    track: previousTrack,
                };
            }

            case SHAKE_TRACK: {
                const shuffledPlaylist = [...state.trackArr].sort(() => Math.random() - 0.5);
                return {
                ...state,
                shake: !state.shake,
                shakePlaylist: shuffledPlaylist,
                };
            }

            case SET_TRACK: {
                const { tracks } = action.payload;
                return {
                ...state,
                track: tracks,
                playing: true,
                };
            }

            case SET_TRACK_ARR: {
                const { tracks } = action.payload;
                return {
                ...state,
                trackArr: tracks,
                };
            }

            case SET_STATUS_PLAY: {
                return {
                ...state,
                playing: !state.playing,
                };
            }

            default:
                return state
        }
    }
