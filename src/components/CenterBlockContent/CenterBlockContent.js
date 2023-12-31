import React from 'react'
import PropTypes from 'prop-types'
import * as S from './CenterBlockContent.style.js'
import { useSelector } from 'react-redux'
const { useContext } = React
import { useParams } from 'react-router-dom'
import {
    statusPlayingSelector,
    currentTrackSelector,
    starredTrackSelector,
    TracksSelector,
    classicMusicTrackSelector,
    rockMusicTrackSelector,
    electroMusicTrackSelector,
} from '../../Store/selectors/track.js'
import { AuthContext } from '../../context/authContext.js'

const trackSvg = `/img/icon/sprite.svg`

const CenterBlockContent = ({
    isLoading,
    getTrackData,
}) => {
    let isPlaying = useSelector(statusPlayingSelector)
    let currentlyTrack = useSelector(currentTrackSelector)
    let tracks = useSelector(TracksSelector)
    let starredTrack = useSelector(starredTrackSelector)
    // let classicMusicTrack = useSelector(classicMusicTrackSelector)
    // let rockMusicTrack = useSelector(rockMusicTrackSelector)
    // let electroMusicTrack = useSelector(electroMusicTrackSelector)

    
    const { Like } = useContext(AuthContext)

    const params = useParams()
    let pageId = Number(params.id)

    if (pageId === 0) {
        tracks = useSelector(starredTrackSelector)
    }
    if (pageId === 1) {
        tracks = useSelector(classicMusicTrackSelector)
    }
    if (pageId === 2) {
        tracks = useSelector(electroMusicTrackSelector)
    }
    if (pageId === 3) {
        tracks = useSelector(rockMusicTrackSelector)
    }

 //в зависимости от значения будет создан необходимый список
    const time = (sec) => {
        const minutes = Math.floor(sec / 60)
        const seconds = sec % 60 < 10 ? `0${sec % 60}` : sec % 60
        return `${minutes}:${seconds}`
    }

    const tracksHtml = tracks.map((track) => (
        <S.PlaylistItem key={track.id} >
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
                    <S.TrackTimeSvg alt="time"  onClick={() => {starredTrack.find(item => item.id === track.id) ? Like(track.id, "DELETE" ):Like(track.id, "POST" )}}>
                    {starredTrack.find(item => item.id === track.id) ? (
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
            <S.ContentPlaylist>{tracksHtml}</S.ContentPlaylist>
        </S.CenterBlockContent>
    )
}

CenterBlockContent.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    getTrackData: PropTypes.func.isRequired,
}

CenterBlockContent.defaultProps = {
    compilationsId: 0,
    favoritesStatus: false,
}
export { CenterBlockContent }
