export const currentTrackSelector = (store) => store.playerControl.track

export const TracksSelector = (store) => store.playerControl.trackArr

export const starredTrackSelector = (store) => store.playerControl.starredTrack

export const classicMusicTrackSelector = (store) => store.playerControl.classicMusicTrack

export const rockMusicTrackSelector = (store) => store.playerControl.rockMusicTrack

export const electroMusicTrackSelector = (store) => store.playerControl.electroMusicTrack

export const statusPlayingSelector = (store) => store.playerControl.playing
