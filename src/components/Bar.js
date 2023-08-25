import React from 'react';
import PropTypes from 'prop-types';
import BarVolume from '../components/BarVolume.js'
import BarControl from '../components/BarControl.js'
function Bar({isLoading}) {

    return(
      <div className="bar">
        <div className="bar__content">
          <div className="bar__player-progress"></div>
          <div className="bar__player-block">
            <div className="bar__player player">
              <BarControl/>
              <div className="player__track-play track-play">
                <div className="track-play__contain">
                  <div className="track-play__image">
                    <svg className="track-play__svg" alt="music">
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className={`track-play__author ${isLoading ? "track-play-loading": ""}`}>
                    <a className="track-play__author-link" href="http://"
                      >Ты та...</a
                    >
                  </div>
                  <div className={`track-play__album ${isLoading ? "track-play-loading": ""}`}>
                    <a className="track-play__album-link" href="http://">Баста</a>
                  </div>
                </div>

                <div className="track-play__like-dis">
                  <div className="track-play__like _btn-icon">
                    <svg className="track-play__like-svg" alt="like">
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </svg>
                  </div>
                  <div className="track-play__dislike _btn-icon">
                    <svg className="track-play__dislike-svg" alt="dislike">
                      <use
                        xlinkHref="img/icon/sprite.svg#icon-dislike"
                      ></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <BarVolume/>
          </div>
        </div>
      </div>
    )
}
Bar.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
export default Bar;