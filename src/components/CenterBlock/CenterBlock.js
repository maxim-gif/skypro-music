import React from 'react'
import PropTypes from 'prop-types'
import { CenterBlockContent } from '../CenterBlockContent/CenterBlockContent.js'
import { Filter } from '../filter/filter.js'
import { Search } from '../search/search.js'
import * as S from './CenterBlock.style.js'

const CenterBlock = ({isLoading, getTrackData, titleName }) => {
    return (
        <S.MainCenterBlock>
            <Search />
            <S.CenterBlockH2>{titleName ? titleName : 'Треки'}</S.CenterBlockH2>
            <Filter $isLoading={isLoading} />
            <CenterBlockContent
                isLoading={isLoading}
                getTrackData={getTrackData}
            />
        </S.MainCenterBlock>
    )
}
CenterBlock.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    getTrackData: PropTypes.func.isRequired,
    titleName: PropTypes.string,
}
export { CenterBlock }
