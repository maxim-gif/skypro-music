import React from 'react';
import PropTypes from 'prop-types';
import {tracks} from '../../tracks.array.js'
import * as S from './CenterBlockContent.style.js'

const trackSvg = `img/icon/sprite.svg`


function CenterBlockContent({isLoading}) {

  const tracksHtml = tracks.map((track, ind) => (
    <S.PlaylistItem key={ind}>
    <S.PlaylistTrack>
      <S.TrackTitle>
        <S.TrackTitleImg>
          <S.TrackTitleSvg alt="music">
            <use xlinkHref={`${trackSvg}#icon-note`}></use>
          </S.TrackTitleSvg>
        </S.TrackTitleImg>
        <S.TrackTitle $isLoading={isLoading}>
          <S.TrackTitleLink href="{track.titleLink}">{track.title}<S.TrackTitleSpan>{track.subtitle}</S.TrackTitleSpan></S.TrackTitleLink>
        </S.TrackTitle>
      </S.TrackTitle>
      <S.TrackAuthor $isLoading={isLoading}>
        <S.TrackAuthorLink href="{track.authorLink}">{track.author}O</S.TrackAuthorLink>
      </S.TrackAuthor>
      <S.TrackAlbum $isLoading={isLoading}>
        <S.TrackAlbumLink href="{track.albumLink}">{track.album}</S.TrackAlbumLink>
      </S.TrackAlbum>
      <div>
        <S.TrackTimeSvg alt="time">
          <use xlinkHref={`${trackSvg}#icon-like`}></use>
        </S.TrackTimeSvg>
        <S.TrackTimeText>{track.time}</S.TrackTimeText>
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
};
export default CenterBlockContent;