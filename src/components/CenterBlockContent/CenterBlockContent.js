import React from 'react';
import PropTypes from 'prop-types';
import * as S from './CenterBlockContent.style.js'

const trackSvg = `/img/icon/sprite.svg`

const CenterBlockContent = ({isLoading, compilationsId, favoritesStatus, tracks, getTrackData}) => {

  console.log(compilationsId, favoritesStatus); //в зависимости от значения будет создан необходимый список
  const time = (sec) => {
    const minutes = Math.floor(sec/60)
    const seconds = sec%60<10?`0${sec%60}`:sec%60
    return `${minutes}:${seconds}`
  }

  const tracksHtml = tracks.map((track) => (
    <S.PlaylistItem key={track.id} onClick={() => getTrackData(track.id)}>
    <S.PlaylistTrack>
      <S.TrackTitle>
        <S.TrackTitleImg>
          <S.TrackTitleSvg alt="music">
            <use xlinkHref={`${trackSvg}#icon-note`}></use>
          </S.TrackTitleSvg>
        </S.TrackTitleImg>
        <S.TrackTitle $isLoading={isLoading}>
          <S.TrackTitleLink >{track.name}<S.TrackTitleSpan>{track.subtitle}</S.TrackTitleSpan></S.TrackTitleLink>
        </S.TrackTitle>
      </S.TrackTitle>
      <S.TrackAuthor $isLoading={isLoading}>
        <S.TrackAuthorLink href="{track.authorLink}">{track.author}</S.TrackAuthorLink>
      </S.TrackAuthor>
      <S.TrackAlbum $isLoading={isLoading}>
        <S.TrackAlbumLink href="{track.albumLink}">{track.album}</S.TrackAlbumLink>
      </S.TrackAlbum>
      <div>
        <S.TrackTimeSvg alt="time">
          <use xlinkHref={`${trackSvg}#icon-like`}></use>
        </S.TrackTimeSvg>
        <S.TrackTimeText>{time(track.duration_in_seconds)}</S.TrackTimeText>
      </div>
    </S.PlaylistTrack>
  </S.PlaylistItem>
  ))

    return(
        <S.CenterBlockContent>
        <S.ContentTitle>
          <S.PlaylistTitleCol $column="col01">Трек</S.PlaylistTitleCol>
          <S.PlaylistTitleCol $column="col02">ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol>
          <S.PlaylistTitleCol $column="col03">АЛЬБОМ</S.PlaylistTitleCol>
          <S.PlaylistTitleCol $column="col04">
            <S.PlaylistTitleSvg alt="time">
              <use xlinkHref="../public/img/icon/sprite.svg#icon-watch"></use>
            </S.PlaylistTitleSvg>
          </S.PlaylistTitleCol>
        </S.ContentTitle>
        <S.ContentPlaylist>
         {tracksHtml}
        </S.ContentPlaylist>
        </S.CenterBlockContent>
    )
}

CenterBlockContent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  favoritesStatus: PropTypes.bool.isRequired,
  compilationsId: PropTypes.number.isRequired,
  tracks: PropTypes.array.isRequired,
  getTrackData: PropTypes.func.isRequired,
};

CenterBlockContent.defaultProps = {
  compilationsId: 0,
  favoritesStatus: false,
};
export { CenterBlockContent };