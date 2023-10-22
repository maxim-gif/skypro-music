import { MainNav } from '../../components/MainNav/MainNav.js'
import { Bar } from '../../components/bar/Bar.js'
import { Sidebar } from '../../components/Sidebar/Sidebar.js'
import { CenterBlock } from '../../components/CenterBlock/CenterBlock.js'
import * as S from './compilations.style.js'
import React from 'react'
import { getTracks } from '../../api/track.js'
import { tracksArr } from '../../tracks.array.js'
import { useDispatch } from 'react-redux'
import { setTrack, setTrackArr } from '../../Store/actions/creators/track.js'

const { useState, useEffect } = React

import { useParams } from 'react-router-dom'

const Compilations = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [tracks, setTracks] = useState(tracksArr)
    const params = useParams()

    const dispatch = useDispatch()
    const getTrackData = (key) => {
        const result = tracks.findIndex((item) => item.id === key)
        dispatch(setTrack(tracks[result]))
        dispatch(setTrackArr(tracks))
    }

    useEffect(() => {
        getTracks().then((response) => {
            setIsLoading(false)
            setTracks(response)
        })
    }, [])


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
    console.log(getTitle(Number(params.id)));
    let tittleName = getTitle(Number(params.id))
    return (
        <div>
            <S.Wrapper>
                <S.Container>
                    <S.Main>
                        <MainNav />
                        <CenterBlock
                            isLoading={isLoading}
                            tracks={tracks}
                            getTrackData={getTrackData}
                            tittleName={tittleName}
                        />
                        <Sidebar isLoading={isLoading} />
                    </S.Main>
                    <Bar isLoading={isLoading} />
                    <footer></footer>
                </S.Container>
            </S.Wrapper>
        </div>
    )
}

export { Compilations }
