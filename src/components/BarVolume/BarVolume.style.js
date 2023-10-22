import styled from 'styled-components'

export const BarVolumeBlock = styled.div`
    width: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 92px 0 0;
`
export const BarVolumeContent = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
`
export const VolumeImage = styled.div`
    width: 13px;
    height: 18px;
    margin-right: 17px;
`
export const VolumeSvg = styled.svg`
    width: 13px;
    height: 18px;
    fill: transparent;
`
export const VolumeProgress = styled.div`
    width: 109px;
    display: flex;
    align-items: center;
    &::after {
        content: '';
        display: block;
        width: 12px;
        height: 12px;
        background-color: black;
        border: 2px solid white;
        border-radius: 50%;
        position: relative;
        right: ${({ $currentVolume }) => 100 - $currentVolume}%;
    }
`
export const VolumeProgressLine = styled.input`
    --progress-height: 4px;
    --progress-color: #b672ff;
    --progress-color: ${(props) => props.$color ?? '#b672ff'};

    --progress-bg-color: #2e2e2e;

    margin: 0;
    width: 109px;
    height: var(--progress-height);
    -webkit-appearance: none;
    cursor: pointer;
    background: transparent;
    position: relative;
    overflow: hidden;

    &::-webkit-slider-runnable-track {
        position: relative;
        height: var(--progress-height);
        background: var(--progress-bg-color);
    }
    &::-webkit-slider-thumb {
        --thumb-height: 1px;
        --thumb-width: 1px;
        position: relative;
        -webkit-appearance: none;
        width: var(--thumb-width, var(--thumb-height));
        box-shadow: calc(-100vmax - var(--thumb-width, var(--thumb-height))) 0 0
            100vmax var(--progress-color);
    }

    &::-webkit-slider-runnable-track {
        background: var(--progress-bg-color);
    }

    /* FF */
    &::-moz-range-track {
        width: 100%;
        height: var(--progress-height);
        background: var(--progress-bg-color);
        border: none;
        border-radius: 0px;
    }
    &::-moz-range-thumb {
        border: none;
        height: 25px;
        width: 25px;
        border-radius: 50%;
        background: transparent;
        margin-bottom: -2px;
    }
    &::-moz-range-progress {
        background-color: var(--progress-color);
        height: var(--progress-height);
    }
`
