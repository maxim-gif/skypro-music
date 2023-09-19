import styled, { keyframes, css } from 'styled-components'

const glowing = keyframes`
0% { background-color: #313131;}
50% { background-color: #646464;}
100% { background-color: #313131; } 
`
const glowingAnimation = css`
  animation: ${glowing} 1300ms infinite;
`

export const PlaylistItem = styled.div`
width: 100%;
display: block;
margin-bottom: 12px;
`
export const PlaylistTrack = styled.div`
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
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
`
export const TrackTitle = styled.div`
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
width: 447px;
${({ $isLoading }) =>
$isLoading &&
css`
  & > a {
    color: transparent;
  }
  & > a > span {
    color: transparent;
  }
  ${glowingAnimation};
  width: 250px;
`}
`
export const TrackTitleImg = styled.div`
width: 51px;
height: 51px;
padding: 16px;
background: #313131;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
margin-right: 17px;
`
export const TrackTitleSvg = styled.svg`
width: 18px;
height: 17px;
fill: transparent;
stroke: #4e4e4e;
`
export const TrackTitleLink = styled.a`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #ffffff;
`
export const TrackTitleSpan = styled.span`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #4e4e4e;
`
export const TrackAuthor = styled.div`
width: 321px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-pack: start;
-ms-flex-pack: start;
justify-content: flex-start;
${({ $isLoading }) =>
$isLoading &&
css`
  & > a {
    color: transparent;
  }
  ${glowingAnimation};
  width: 300px;
  margin-right: 21px;
`}
`
export const TrackAuthorLink = styled.a`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #ffffff;
text-align: left;
`
export const TrackAlbum = styled.div`
width: 245px;
${({ $isLoading }) =>
$isLoading &&
css`
  & > a {
    color: transparent;
  }
  ${glowingAnimation};
  width: 230px;
  margin-right: 15px;
`}
`
export const TrackAlbumLink = styled.a`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #696969;
`
export const TrackTimeSvg = styled.svg`
width: 14px;
height: 12px;
margin-right: 17px;
fill: transparent;
stroke: #696969;
`
export const TrackTimeText = styled.span`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
text-align: right;
color: #696969;
`
export const CenterBlockContent = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
`
export const ContentTitle = styled.div`
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
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
margin-bottom: 24px;
`
export const PlaylistTitleCol = styled.div`
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
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
margin-bottom: 24px;
${({ $column }) => {
    switch ($column) {
      case 'col01':
        return `
        width: 447px;
        `
      case 'col02':
        return `
        width: 321px;
        `
      case 'col03':
        return `
        width: 245px;
        `
      case 'col04':
        return `
        width: 60px;
        text-align: end;
        `
      default:
        return ''
    }
  }}
`
export const PlaylistTitleSvg = styled.svg`
width: 12px;
height: 12px;
fill: transparent;
stroke: #696969;
`
export const ContentPlaylist = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
overflow-y: auto;

max-height: 750px;
&::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
scrollbar-width: none;
-ms-overflow-style: none;
`