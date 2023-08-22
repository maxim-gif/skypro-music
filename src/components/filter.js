import React from 'react';
const { useState } = React;
function Filter() {
    const [visibleFilter, setVisibleFilter] = useState();



    return(
        <div className="centerblock__filter filter">
          <div className="filter__title">Искать по:</div>
          <div 
            className={`filter__button button-author _btn-text ${visibleFilter === `author` ? 'active' : ''}`} 
            onClick={() => visibleFilter === `author` ? setVisibleFilter('') : setVisibleFilter('author') }
            >
            <span>исполнителю</span>
            <div className="select-author select-modal" style={{ display: visibleFilter === `author` ? 'block' : 'none' }}>
                <div className="modal-link-box not-scroll">
                    <a className="modal-link">Nero</a>
                    <a className="modal-link">Dynoro</a>
                    <a className="modal-link">Ali Bakgor</a>
                    <a className="modal-link">Стоункат</a>
                    <a className="modal-link">AR/CO</a>
                    <a className="modal-link">Zeds Dead</a>
                    <a className="modal-link">Mr. Black</a>
                </div>
            </div>
          </div>
          <div 
            className={`filter__button button-year _btn-text ${visibleFilter === `year` ? 'active' : ''}`} 
            onClick={() => visibleFilter === `year` ? setVisibleFilter('') : setVisibleFilter('year') }
            >
          <span>году выпуска</span>
            <div className="select-year select-modal" style={{ display: visibleFilter === `year` ? 'block' : 'none' }}>
                <div className="modal-link-box">
                    <a className="modal-link">По умолчанию</a>
                    <a className="modal-link">Сначала новые</a>
                    <a className="modal-link">Сначала старые</a>
                </div>
            </div>
          </div>
          <div 
            className={`filter__button button-genre _btn-text ${visibleFilter === `genre` ? 'active' : ''}`} 
            onClick={() => visibleFilter === `genre` ? setVisibleFilter('') : setVisibleFilter('genre') }
            >
          <span>жанру</span>
            <div className="select-genre select-modal" style={{ display: visibleFilter === `genre` ? 'block' : 'none' }}>
                <div className="modal-link-box not-scroll">
                    <a className="modal-link">Рок</a>
                    <a className="modal-link">Хип-хоп</a>
                    <a className="modal-link">Поп-музыка</a>
                    <a className="modal-link">Техно</a>
                    <a className="modal-link">Инди</a>
                    <a className="modal-link">Техно</a>
                    <a className="modal-link">Инди</a>
                </div>
            </div>
          </div>
        </div>
    )
}

export default Filter;