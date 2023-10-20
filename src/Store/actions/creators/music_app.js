import { AUTO_NEXT_TRACK, SWITCH_NEXT_TRACK, SWITCH_PREVIOUS_TRACK, SHAKE_TRACK  } from "../types/music_app.js";



export const autoNextTrack = (id) => ({
  type: AUTO_NEXT_TRACK,
  payload: { id },
});

export const switchNextTrack = (tracks) => ({
  type: SWITCH_NEXT_TRACK,
  payload: tracks,
});

export const switchPreviousTrack = (id) => ({
    type: SWITCH_PREVIOUS_TRACK,
    payload: { id },
});

export const shakeTrack = (id) => ({
    type: SHAKE_TRACK,
    payload: { id },
});