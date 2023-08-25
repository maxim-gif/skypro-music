import React from 'react';
import PropTypes from 'prop-types';
import BarVolume from '../BarVolume/BarVolume.js'
import BarControl from '../BarControl/BarControl.js'
import * as S from './Bar.style.js'

function Bar({isLoading}) {

    return(
      <S.Bar>
        <S.BarContent>
          <S.BarPlayerProgress></S.BarPlayerProgress>
          <S.BarPlayerBlock>
            <S.BarPlayer>

              <BarControl/>

              <S.PlayerTrackPlay>
                <S.TrackPlayContain>
                  <S.TrackPlayImage>
                    <S.TrackPlaySvg alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </S.TrackPlaySvg>
                  </S.TrackPlayImage>
                  <S.TrackPlayAuthor $isLoading={isLoading}>
                    <S.TrackPlayAuthorLink href="http://">Ты та...</S.TrackPlayAuthorLink>
                  </S.TrackPlayAuthor>
                  <S.TrackPlayAlbum $isLoading={isLoading}>
                    <S.TrackPlayAlbumLink href="http://">Баста</S.TrackPlayAlbumLink>
                  </S.TrackPlayAlbum>
                </S.TrackPlayContain>

                <S.TrackPlayLikeDis>
                  <S.TrackPlayLikeAndDis className="_btn-icon">
                    <S.TrackPlayLikeSvg alt="like">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </S.TrackPlayLikeSvg>
                  </S.TrackPlayLikeAndDis>
                  <S.TrackPlayLikeAndDis className="_btn-icon">
                    <S.TrackPlayDislikeSvg alt="dislike">
                      <use
                        xlinkHref="img/icon/sprite.svg#icon-dislike"
                      ></use>
                    </S.TrackPlayDislikeSvg>
                  </S.TrackPlayLikeAndDis>
                </S.TrackPlayLikeDis>
              </S.PlayerTrackPlay>
            </S.BarPlayer>
            <BarVolume/>
          </S.BarPlayerBlock>
        </S.BarContent>
      </S.Bar>
    )
}
Bar.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
export default Bar;