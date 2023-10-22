import * as S from './BarVolume.style.js'
import PropTypes from 'prop-types'
const BarVolume = ({ handleVolumeChange, currentVolume }) => {
    return (
        <S.BarVolumeBlock>
            <S.BarVolumeContent>
                <S.VolumeImage>
                    <S.VolumeSvg alt="volume">
                        <use xlinkHref="/img/icon/sprite.svg#icon-volume"></use>
                    </S.VolumeSvg>
                </S.VolumeImage>
                <S.VolumeProgress
                    className="_btn"
                    $currentVolume={currentVolume}
                >
                    <S.VolumeProgressLine
                        className="_btn"
                        type="range"
                        min={0}
                        max={100}
                        value={currentVolume}
                        step={1}
                        onChange={handleVolumeChange}
                        $color="#ffffff"
                    />
                </S.VolumeProgress>
            </S.BarVolumeContent>
        </S.BarVolumeBlock>
    )
}

BarVolume.propTypes = {
    handleVolumeChange: PropTypes.func.isRequired,
    currentVolume: PropTypes.number.isRequired,
}
export { BarVolume }
