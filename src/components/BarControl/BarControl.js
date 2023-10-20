import * as S from './BarControl.style.js'
import PropTypes from 'prop-types'
const BarControl = ({ play, isPlaying, changeLoop, loop }) => {
    return (
        <S.PlayerControl>
            <S.PlayerBtnPrev
                onClick={() => alert('данная функция еще не реализована')}
            >
                <S.PlayerBtnPrevSvg alt="prev">
                    <use xlinkHref="/img/icon/sprite.svg#icon-prev"></use>
                </S.PlayerBtnPrevSvg>
            </S.PlayerBtnPrev>
            <S.PlayerBtnPlay className="_btn" onClick={play}>
                <S.PlayerBtnPlaySvg alt="play">
                    {isPlaying ? (
                        <image
                            xlinkHref="/img/icon/pause.png"
                            width="100%"
                            height="100%"
                        />
                    ) : (
                        <use xlinkHref="/img/icon/sprite.svg#icon-play" />
                    )}
                </S.PlayerBtnPlaySvg>
            </S.PlayerBtnPlay>
            <S.PlayerBtnNext
                onClick={() => alert('данная функция еще не реализована')}
            >
                <S.PlayerBtnNextSvg alt="next">
                    <use xlinkHref="/img/icon/sprite.svg#icon-next"></use>
                </S.PlayerBtnNextSvg>
            </S.PlayerBtnNext>
            <S.PlayerBtnRepeat
                className="_btn-icon"
                onClick={changeLoop}
                $loop={loop}
            >
                <S.PlayerBtnRepeatSvg alt="repeat">
                    {loop ? (
                        <image
                            xlinkHref="/img/icon/repeat-active.png"
                            width="100%"
                            height="100%"
                        />
                    ) : (
                        <use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>
                    )}
                </S.PlayerBtnRepeatSvg>
            </S.PlayerBtnRepeat>
            <S.PlayerBtnShuffle
                className="_btn-icon"
                onClick={() => alert('данная функция еще не реализована')}
            >
                <S.PlayerBtnShuffleSvg alt="shuffle">
                    <use xlinkHref="/img/icon/sprite.svg#icon-shuffle"></use>
                </S.PlayerBtnShuffleSvg>
            </S.PlayerBtnShuffle>
        </S.PlayerControl>
    )
}
BarControl.propTypes = {
    play: PropTypes.func.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    loop: PropTypes.bool.isRequired,
    changeLoop: PropTypes.func.isRequired,
}
export { BarControl }
