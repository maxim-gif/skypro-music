import React from 'react'
import PropTypes from 'prop-types'
import { BarVolume } from '../BarVolume/BarVolume.js'
import { BarControl } from '../BarControl/BarControl.js'
import { useRef, useState, useEffect, useContext } from 'react'
import * as S from './Bar.style.js'
import { useSelector } from 'react-redux'
import {
    currentTrackSelector,
    starredTrackSelector,
} from '../../Store/selectors/track.js'
import { useDispatch } from 'react-redux'
import { AuthContext } from '../../context/authContext.js'
import {
    switchNextTrack,
    switchPreviousTrack,
    setStatusPlay,
} from '../../Store/actions/creators/track.js'

const Bar = ({ isLoading }) => {
    let trackId = useSelector(currentTrackSelector)
    let starredTrack = useSelector(starredTrackSelector)
    const { Like } = useContext(AuthContext)
    const isVisible = !!trackId.id

    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [currentVolume, setCurrentVolume] = useState(50)
    const [isPlaying, setIsPlaying] = useState(false)
    const [loop, setLoop] = useState(false)
    const [shuffle, setShuffle] = useState(false)

    const audioRef = useRef(null)
    const dispatch = useDispatch()

    const handleSwitchNextTrack = () => {
        dispatch(switchNextTrack())
    }

    const handleSwitchPreviousTrack = () => {
        if (currentTime > 5) {
            setCurrentTime(0)
            audioRef.current.currentTime = 0
        } else {
            dispatch(switchPreviousTrack())
        }
    }

    const handleStart = () => {
        audioRef.current.play()
        setIsPlaying(true)
    }

    const handleStop = () => {
        audioRef.current.pause()
        setIsPlaying(false)
    }

    const changeLoop = () => {
        audioRef.current.loop = !audioRef.current.loop
        setLoop(!loop)
    }

    const toggleShuffle = () => {
        setShuffle(!shuffle)
    }

    const togglePlay = () => {
        if (isPlaying) {
            handleStop()
            dispatch(setStatusPlay())
        } else {
            handleStart()
            dispatch(setStatusPlay())
        }
    }

    useEffect(() => {
        if (trackId) {
            audioRef.current.addEventListener('loadedmetadata', () => {
                setDuration(audioRef.current.duration)
                handleStart()
            })
            audioRef.current.addEventListener('ended', handleSwitchNextTrack)
        }
        audioRef.current.src = trackId.track_file
        audioRef.current.volume = currentVolume / 100

        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener(
                    'ended',
                    handleSwitchNextTrack,
                )
                audioRef.current.removeEventListener('loadedmetadata', () => {
                    setDuration(audioRef.current.duration)
                    handleStart()
                })
            }
        }
    }, [trackId])

    useEffect(() => {
        if (audioRef && audioRef.current) {
            const onTimeUpdate = () => {
                if (audioRef.current) {
                    setCurrentTime(audioRef.current.currentTime)
                }
            }

            audioRef.current.addEventListener('timeupdate', onTimeUpdate)

            return () => {
                if (audioRef.current) {
                    audioRef.current.removeEventListener(
                        'timeupdate',
                        onTimeUpdate,
                    )
                }
            }
        }
    }, [])

    const handleTimeChange = (event) => {
        const currentTime = parseFloat(event.target.value)
        setCurrentTime(currentTime)
        audioRef.current.currentTime = currentTime
    }

    const handleVolumeChange = (event) => {
        const currentVolume = parseFloat(event.target.value)
        setCurrentVolume(currentVolume)
        audioRef.current.volume = currentVolume / 100
    }

    const time = (sec) => {
        const minutes = Math.floor(sec / 60)
        const seconds = sec % 60 < 10 ? `0${sec % 60}` : sec % 60
        return `${minutes}:${seconds}`
    }
    return (
        <>
            <audio ref={audioRef}>
                <source src="" type="audio/mpeg" />
            </audio>

            <S.Bar $isVisible={isVisible}>
                <S.BarPlayerHug>
                    {time(Math.round(currentTime))}/{time(Math.round(duration))}
                </S.BarPlayerHug>
                <S.BarContent>
                    <S.BarPlayerProgress
                        min={0}
                        max={duration}
                        value={currentTime}
                        step={0.01}
                        onChange={handleTimeChange}
                        $color="#B672FF"
                    ></S.BarPlayerProgress>
                    <S.BarPlayerBlock>
                        <S.BarPlayer>
                            <BarControl
                                play={togglePlay}
                                isPlaying={isPlaying}
                                changeLoop={changeLoop}
                                loop={loop}
                                toggleShuffle={toggleShuffle}
                                shuffle={shuffle}
                                handleSwitchPreviousTrack={
                                    handleSwitchPreviousTrack
                                }
                            />

                            <S.PlayerTrackPlay>
                                <S.TrackPlayContain>
                                    <S.TrackPlayImage>
                                        <S.TrackPlaySvg alt="music">
                                            <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                                        </S.TrackPlaySvg>
                                    </S.TrackPlayImage>
                                    <S.TrackPlayAuthor $isLoading={isLoading}>
                                        <S.TrackPlayAuthorLink href="http://">
                                            {trackId.name}
                                        </S.TrackPlayAuthorLink>
                                    </S.TrackPlayAuthor>
                                    <S.TrackPlayAlbum $isLoading={isLoading}>
                                        <S.TrackPlayAlbumLink href="http://">
                                            {trackId.author}
                                        </S.TrackPlayAlbumLink>
                                    </S.TrackPlayAlbum>
                                </S.TrackPlayContain>

                                <S.TrackPlayLikeDis>
                                    <S.TrackPlayLikeAndDis className="_btn-icon">
                                        <S.TrackPlayLikeSvg
                                            alt="like"
                                            onClick={() => {
                                                starredTrack.find(
                                                    (item) =>
                                                        item.id === trackId.id,
                                                )
                                                    ? Like(trackId.id, 'DELETE')
                                                    : Like(trackId.id, 'POST')
                                            }}
                                        >
                                            {starredTrack.find(
                                                (item) =>
                                                    item.id === trackId.id,
                                            ) ? (
                                                <image
                                                    xlinkHref="/img/icon/like-active.png"
                                                    width="100%"
                                                    height="100%"
                                                />
                                            ) : (
                                                <use
                                                    xlinkHref={`/img/icon/sprite.svg#icon-like`}
                                                ></use>
                                            )}
                                        </S.TrackPlayLikeSvg>
                                    </S.TrackPlayLikeAndDis>
                                </S.TrackPlayLikeDis>
                            </S.PlayerTrackPlay>
                        </S.BarPlayer>
                        <BarVolume
                            handleVolumeChange={handleVolumeChange}
                            currentVolume={currentVolume}
                        />
                    </S.BarPlayerBlock>
                </S.BarContent>
            </S.Bar>
        </>
    )
}

Bar.propTypes = {
    isLoading: PropTypes.bool,
}
export { Bar }
