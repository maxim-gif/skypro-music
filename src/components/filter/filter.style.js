import styled, { css } from 'styled-components'

const SelectMixin = css`
    display: none;
    position: absolute;
    border-radius: 12px;
    padding: 34px;
    top: 48px;
    left: 0;
    background-color: #313131;
`
export const ModalLink = styled.a`
    &:hover {
        text-decoration: underline;
        color: #b672ff;
    }
    display: block;
    font-size: 20px;
    font-weight: 400;
`
export const CenterBlockFilter = styled.div`
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
    margin-bottom: 51px;
`
export const FilterTitle = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-right: 15px;
`
export const ModalLinkBox = styled.div`
    &::-webkit-scrollbar-thumb {
        background-color: #fff;
        border-radius: 10px;
    }
    &::-webkit-scrollbar {
        border-radius: 10px;
        width: 4px;
        background-color: #4b4949;
    }
    max-height: 100%;
    display: flex;
    flex-direction: column;
    gap: 28px;
    overflow-y: auto;
`
export const FilterButton = styled.div`
    &:not(:last-child) {
        margin-right: 10px;
    }
    position: relative;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid #ffffff;
    border-radius: 60px;
    padding: 6px 20px;
    ${({ $isActive }) =>
        $isActive &&
        `
&> span{
    color: #d9b6ff;
  }
border-color: #d9b6ff;
& > div{
    display:block;
}
`}
`
export const SelectAuthor = styled.div`
    ${SelectMixin}
    width: 248px;
    height: 305px;
`
export const SelectYear = styled.div`
    ${SelectMixin}
    width: 221px;
    height: 196px;
`
export const SelectGenre = styled.div`
    ${SelectMixin}
    height: 305px;
    width: 248px;
`
