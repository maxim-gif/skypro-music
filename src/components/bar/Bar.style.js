import styled, { keyframes, css } from 'styled-components'

const glowing = keyframes`
0% { background-color: #313131;}
50% { background-color: #646464;}
100% { background-color: #313131; } 
`
export const Bar = styled.div`
    display: ${({ $isVisible }) => ($isVisible ? 'block' : 'none')};
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(28, 28, 28, 0.5);
`
export const BarContent = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
`
export const BarPlayerHug = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 18px;
    margin-bottom: 10px;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: #696969;
    margin-right: 10px;
`
export const BarPlayerProgress = styled.input.attrs({ type: 'range' })`
    &:hover {
        --progress-height: 8px;
    }
    --progress-height: 5px;
    --progress-color: #b672ff;
    --progress-color: ${(props) => props.$color ?? '#b672ff'};

    --progress-bg-color: #2e2e2e;

    margin: 0;
    width: 100%;
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
    }
    &::-moz-range-progress {
        background-color: var(--progress-color);
        height: var(--progress-height);
    }
`
export const BarPlayerBlock = styled.div`
    background-color: #1c1c1c;
    height: 73px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
`

export const BarPlayer = styled.div`
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
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
`
export const PlayerTrackPlay = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
`

export const TrackPlayContain = styled.div`
    width: auto;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: auto 1fr;
    grid-template-columns: auto 1fr;
    grid-template-areas: 'image author' 'image album';
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`
export const TrackPlayImage = styled.div`
    width: 51px;
    height: 51px;
    background-color: #313131;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-right: 12px;
    -ms-grid-row: 1;
    -ms-grid-row-span: 2;
    -ms-grid-column: 1;
    grid-row: 1;
    grid-column: 1;
    grid-area: image;
`
export const TrackPlaySvg = styled.svg`
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: #4e4e4e;
`
export const TrackPlayLikeSvg = styled.svg`
    width: 14px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
`
export const TrackPlayDislikeSvg = styled.svg`
    width: 14.34px;
    height: 13px;
    fill: transparent;
    stroke: #696969;
`

export const TrackPlayLikeDis = styled.div`
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
    margin-left: 26%;
`
export const TrackPlayLikeAndDis = styled.div`
    padding: 5px;
`

export const TrackPlayAlbum = styled.div`
    & > a {
        color: ${({ $isLoading }) => ($isLoading ? 'transparent' : '#ffffff')};
    }
    animation: ${({ $isLoading }) =>
        $isLoading
            ? css`
                  ${glowing} 1300ms infinite
              `
            : 'none'};
    -ms-grid-row: 2;
    -ms-grid-column: 2;
    grid-row: 2;
    grid-column: 2;
    grid-area: album;
    min-width: 49px;
`
export const TrackPlayAuthor = styled.div`
    & > a {
        color: ${({ $isLoading }) => ($isLoading ? 'transparent' : '#ffffff')};
    }
    animation: ${({ $isLoading }) =>
        $isLoading
            ? css`
                  ${glowing} 1300ms infinite
              `
            : 'none'};
    grid-row: 1;
    grid-column: 2;
    -ms-grid-row: 1;
    -ms-grid-column: 2;
    grid-area: author;
    min-width: 49px;
`

export const TrackPlayAuthorLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    white-space: nowrap;
`
export const TrackPlayAlbumLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 24px;
`
