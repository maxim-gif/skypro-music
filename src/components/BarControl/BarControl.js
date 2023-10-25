import * as S from './BarControl.style.js'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import {
    switchNextTrack,
    shakeTrack,
} from '../../Store/actions/creators/track.js'

const BarControl = ({
    play,
    isPlaying,
    changeLoop,
    loop,
    shuffle,
    toggleShuffle,
    handleSwitchPreviousTrack,
}) => {

    const dispatch = useDispatch()

    const handleSwitchNextTrack = () => {
        dispatch(switchNextTrack())
    }

    const handleShakeTrack = () => {
        dispatch(shakeTrack())
    }

    return (
        <S.PlayerControl>
            <S.PlayerBtnPrev onClick={handleSwitchPreviousTrack}>
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
            <S.PlayerBtnNext onClick={handleSwitchNextTrack}>
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
                onClick={() => {
                    handleShakeTrack()
                    toggleShuffle()
                }}
            >
                <S.PlayerBtnShuffleSvg alt="shuffle">
                    {shuffle ? (
                        <image
                            xlinkHref="/img/icon/shake-active.png"
                            width="100%"
                            height="100%"
                        />
                    ) : (
                        <use xlinkHref="/img/icon/sprite.svg#icon-shuffle"></use>
                    )}
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
    shuffle: PropTypes.bool.isRequired,
    toggleShuffle: PropTypes.func.isRequired,
    handleSwitchPreviousTrack: PropTypes.func.isRequired,
}
export { BarControl }
