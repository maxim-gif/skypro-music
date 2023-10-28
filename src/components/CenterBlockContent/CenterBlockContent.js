import React from 'react'
import PropTypes from 'prop-types'
import * as S from './CenterBlockContent.style.js'
import { useSelector } from 'react-redux'
const { useContext, useEffect, useState } = React
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setTrack } from '../../Store/actions/creators/track.js'
import {
    statusPlayingSelector,
    currentTrackSelector,
    starredTrackSelector,
    classicMusicTrackSelector,
    rockMusicTrackSelector,
    TracksSelector,
    electroMusicTrackSelector,
} from '../../Store/selectors/track.js'
import { AuthContext } from '../../context/authContext.js'

const trackSvg = `/img/icon/sprite.svg`

const CenterBlockContent = ({ isLoading }) => {
    let isPlaying = useSelector(statusPlayingSelector)
    let currentlyTrack = useSelector(currentTrackSelector)
    let starredTrack = useSelector(starredTrackSelector)
    const dispatch = useDispatch()
    const [tracks, setTracks] = useState([])
    const [originalTracks, setOriginalTracks] = useState([])
    const [filteredTracks, setFilteredTracks] = useState([])

    const {
        Like,
        searchText,
        setSearchText,
        filterGenre,
        filterYear,
        filterAuthor,
    } = useContext(AuthContext)

    const params = useParams()
    let pageId = Number(params.id)

    let defaultTracks = useSelector(TracksSelector)
    let classicTracks = useSelector(classicMusicTrackSelector)
    let electroTracks = useSelector(electroMusicTrackSelector)
    let rockTracks = useSelector(rockMusicTrackSelector)
    let starredTracks = useSelector(starredTrackSelector)



    useEffect(() => {
        setSearchText('')
        const tracksMap = {
            'default': defaultTracks,
            0: starredTracks,
            1: classicTracks,
            2: electroTracks,
            3: rockTracks,
        }
 
        let tracksToSet

        if (!pageId) {
            tracksToSet = tracksMap['default'];
        } else {
            tracksToSet = tracksMap[pageId];
        }
        setTracks(tracksToSet)
        setOriginalTracks(tracksToSet)
        setFilteredTracks(tracksToSet)
 
    }, [starredTracks, classicTracks, electroTracks, rockTracks, defaultTracks,pageId])

    const stringDateToNumber = (date) => {
        const [year, month, day] = date.split('-').map(Number)
        const number = year * 365 + month * 30 + day
        return number
    }
    console.log(tracks);
    console.log(originalTracks);
    useEffect(() => {
        let resultFilter = originalTracks.map((track) => {
            return {
                ...track,
                release_date: stringDateToNumber(
                    !track.release_date ? '2000-01-01' : track.release_date,
                ),
            }
        })

        if (filterYear === 'old') {
            resultFilter.sort((a, b) => a.release_date - b.release_date)
        }
        if (filterYear === 'new') {
            resultFilter.sort((a, b) => b.release_date - a.release_date)
        }

        if (filterGenre.length !== 0) {
            resultFilter = resultFilter.filter((track) =>
                filterGenre.includes(track.genre),
            )
        }

        if (filterAuthor.length !== 0) {
            resultFilter = resultFilter.filter((track) =>
                filterAuthor.includes(track.author),
            )
        }
        setTracks(resultFilter)
        setFilteredTracks(resultFilter)
    }, [filterGenre, filterYear, filterAuthor])

    useEffect(() => {
        const resultSearch = filteredTracks.filter(
            (track) =>
                track.name.toLowerCase().includes(searchText.toLowerCase()) ||
                track.author.toLowerCase().includes(searchText.toLowerCase()),
        )

        setTracks(resultSearch)
    }, [searchText])

    const getTrackData = (key) => {
        const result = tracks.findIndex((item) => item.id === key)
        dispatch(setTrack(tracks[result]))
    }

    const time = (sec) => {
        const minutes = Math.floor(sec / 60)
        const seconds = sec % 60 < 10 ? `0${sec % 60}` : sec % 60
        return `${minutes}:${seconds}`
    }

    const tracksHtml = tracks.map((track) => (
        <S.PlaylistItem key={track.id}>
            <S.PlaylistTrack>
                <S.TrackTitle onClick={() => getTrackData(track.id)}>
                    <S.TrackTitleImg>
                        {currentlyTrack.id === track.id ? (
                            isPlaying ? (
                                <S.BlinkingDotAnimation></S.BlinkingDotAnimation>
                            ) : (
                                <S.BlinkingDot></S.BlinkingDot>
                            )
                        ) : (
                            <S.TrackTitleSvg alt="music">
                                <use xlinkHref={`${trackSvg}#icon-note`}></use>
                            </S.TrackTitleSvg>
                        )}
                    </S.TrackTitleImg>
                    <S.TrackTitle $isLoading={isLoading}>
                        <S.TrackTitleLink>
                            {track.name}
                            <S.TrackTitleSpan>
                                {track.subtitle}
                            </S.TrackTitleSpan>
                        </S.TrackTitleLink>
                    </S.TrackTitle>
                </S.TrackTitle>
                <S.TrackAuthor $isLoading={isLoading}>
                    <S.TrackAuthorLink>{track.author}</S.TrackAuthorLink>
                </S.TrackAuthor>
                <S.TrackAlbum $isLoading={isLoading}>
                    <S.TrackAlbumLink>{track.album}</S.TrackAlbumLink>
                </S.TrackAlbum>
                <div>
                    <S.TrackTimeSvg
                        alt="time"
                        onClick={() => {
                            starredTrack.find((item) => item.id === track.id)
                                ? Like(track.id, 'DELETE')
                                : Like(track.id, 'POST')
                        }}
                    >
                        {starredTrack.find((item) => item.id === track.id) ? (
                            <image
                                xlinkHref="/img/icon/like-active.png"
                                width="100%"
                                height="100%"
                            />
                        ) : (
                            <use xlinkHref={`${trackSvg}#icon-like`}></use>
                        )}
                    </S.TrackTimeSvg>
                    <S.TrackTimeText>
                        {time(track.duration_in_seconds)}
                    </S.TrackTimeText>
                </div>
            </S.PlaylistTrack>
        </S.PlaylistItem>
    ))

    return (
        <S.CenterBlockContent>
            <S.ContentTitle>
                <S.PlaylistTitleCol $column="col01">Трек</S.PlaylistTitleCol>
                <S.PlaylistTitleCol $column="col02">
                    ИСПОЛНИТЕЛЬ
                </S.PlaylistTitleCol>
                <S.PlaylistTitleCol $column="col03">АЛЬБОМ</S.PlaylistTitleCol>
                <S.PlaylistTitleCol $column="col04">
                    <S.PlaylistTitleSvg alt="time">
                        <use xlinkHref="../public/img/icon/sprite.svg#icon-watch"></use>
                    </S.PlaylistTitleSvg>
                </S.PlaylistTitleCol>
            </S.ContentTitle>
            <S.ContentPlaylist>
                {tracksHtml.length === 0 ? (
                    <S.NotFound>Ничего не найдено (ಥ﹏ಥ)</S.NotFound>
                ) : (
                    tracksHtml
                )}
            </S.ContentPlaylist>
        </S.CenterBlockContent>
    )
}

CenterBlockContent.propTypes = {
    isLoading: PropTypes.bool.isRequired,
}

CenterBlockContent.defaultProps = {
    compilationsId: 0,
    favoritesStatus: false,
}
export { CenterBlockContent }
