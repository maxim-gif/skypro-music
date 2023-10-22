import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.div`
    background-color: #000000;
    max-width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    width: 431px;
    height: 366px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const SubTitleBox = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`
export const NotFoundLink = styled(NavLink)`
    width: 278px;
    height: 58px;
    border-radius: 6px;
    background-color: #580ea2;
    font-size: 18px;
    font-weight: 400;
    color: #ffffff;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Title = styled.h1`
    font-size: 160px;
    font-weight: 400;
    line-height: 168px;
`
export const SubTitleImg = styled.img`
    width: 52px;
    height: 52px;
`
export const SubTitle = styled.h2`
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 8px;
`
export const Description = styled.h3`
    font-size: 18px;
    font-weight: 400;
    color: #4e4e4e;
    margin-bottom: 36px;
    text-align: center;
    width: 277px;
    line-height: 24px;
`
