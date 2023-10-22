import React from 'react'
import PropTypes from 'prop-types'
import { CenterBlockContent } from '../CenterBlockContent/CenterBlockContent.js'
import { Filter } from '../filter/filter.js'
import { Search } from '../search/search.js'
import * as S from './CenterBlock.style.js'


const CenterBlock = ({ isLoading, tracks, getTrackData, tittleName }) => {


    return (
        <S.MainCenterBlock>
            <Search/>
            <S.CenterBlockH2>{tittleName ? tittleName : 'Треки'}</S.CenterBlockH2>
            <Filter $isLoading={isLoading} />
            <CenterBlockContent
                isLoading={isLoading}
                tracks={tracks}
                getTrackData={getTrackData}
            />
        </S.MainCenterBlock>
    )
}
CenterBlock.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    tracks: PropTypes.array.isRequired,
    getTrackData: PropTypes.func.isRequired,
    tittleName: PropTypes.string.isRequired,
}
export { CenterBlock }
