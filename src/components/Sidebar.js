import React from 'react';
import PropTypes from 'prop-types';
function Sidebar({isLoading}) {
    return(
        <div className="main__sidebar sidebar">
        <div className="sidebar__personal">
          <p className="sidebar__personal-name">Sergey.Ivanov</p>
          <div className="sidebar__icon">
            <svg alt="logout">
              <use xlinkHref="img/icon/sprite.svg#logout"></use>
            </svg>
          </div>
        </div>
        <div className="sidebar__block">
          <div className="sidebar__list">
            <div className={`sidebar__item ${isLoading ? `sidebar__item-loading` : ``}`}>
              <a className="sidebar__link" href="#">
                <img
                  className="sidebar__img"
                  src="img/playlist01.png"
                  alt="day's playlist"
                />
              </a>
            </div>
            <div className={`sidebar__item ${isLoading ? `sidebar__item-loading` : ``}`}>
              <a className="sidebar__link" href="#">
                <img
                  className="sidebar__img"
                  src="img/playlist02.png"
                  alt="day's playlist"
                />
              </a>
            </div>
            <div className={`sidebar__item ${isLoading ? `sidebar__item-loading` : ``}`}>
              <a className="sidebar__link" href="#">
                <img
                  className="sidebar__img"
                  src="img/playlist03.png"
                  alt="day's playlist"
                />
              </a>
            </div>
          </div>
        </div>
        </div>
    )
}

Sidebar.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
export default Sidebar;