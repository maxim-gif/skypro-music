export const currentTrackSelector = (store) => store.playerControl.track

export const TracksSelector = (store) => store.playerControl.trackArr

export const starredTrackSelector = (store) => store.playerControl.starredTrack

export const statusPlayingSelector = (store) => store.playerControl.playing
