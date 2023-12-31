import { MainNav } from '../../components/MainNav/MainNav.js'
import { Sidebar } from '../../components/Sidebar/Sidebar.js'
import { CenterBlock } from '../../components/CenterBlock/CenterBlock.js'
import * as S from './compilations.style.js'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setTrack} from '../../Store/actions/creators/track.js'
const { useState, useEffect, useContext } = React
import { useSelector } from 'react-redux'
import {TracksSelector} from '../../Store/selectors/track.js'
import { AuthContext } from '../../context/authContext.js'

import { useParams } from 'react-router-dom'

const Compilations = () => {
    const [isLoading, setIsLoading] = useState(true)
    let tracks = useSelector(TracksSelector)
    const { handleGetCompilationsFavorite, handleGetCompilationsId, likeUpdated } = useContext(AuthContext)
    const params = useParams()

    const dispatch = useDispatch()

  
    
    const getTrackData = (key) => {
        const result = tracks.findIndex((item) => item.id === key)
        dispatch(setTrack(tracks[result]))
        
    }
   



    useEffect(() => {
        if (Number(params.id) === 0) {
            handleGetCompilationsFavorite().then(setIsLoading(false))
        } else {
            handleGetCompilationsFavorite()
            handleGetCompilationsId(Number(params.id))
        }
        setIsLoading(false)
        console.log(params.id);
    }, [likeUpdated])

    const getTitle = (id) => {
        switch (id) {
            case 0:
                return 'Мои треки'
            case 1:
                return 'Плейлист дня'
            case 2:
                return '100 танцевальных хитов'
            case 3:
                return 'Инди-заряд'
        }
    }

    let titleName = getTitle(Number(params.id))

    return (
        <div>
            <S.Wrapper>
                <S.Container>
                    <S.Main>
                        <MainNav />
                        <CenterBlock
                            isLoading={isLoading}
                            getTrackData={getTrackData}
                            titleName={titleName}
                        />
                        <Sidebar isLoading={isLoading} />
                    </S.Main>
                    <footer></footer>
                </S.Container>
            </S.Wrapper>
        </div>
    )
}

export { Compilations }
