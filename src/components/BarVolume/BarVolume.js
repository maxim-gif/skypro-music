import * as S from './BarVolume.style.js'
const BarVolume = () => {
  return(
    <S.BarVolumeBlock>
          <S.BarVolumeContent>
            <S.VolumeImage>
              <S.VolumeSvg alt="volume">
                <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
              </S.VolumeSvg>
            </S.VolumeImage>
            <S.VolumeProgress className="_btn">
              <S.VolumeProgressLine
                className="_btn"
                type="range"
                name="range"
              />
            </S.VolumeProgress>
          </S.BarVolumeContent>
    </S.BarVolumeBlock>
) 
}

export  {BarVolume};