import { MainNav } from '../../components/MainNav/MainNav.js'
import { Bar } from '../../components/bar/Bar.js'
import { Sidebar } from '../../components/Sidebar/Sidebar.js'
import { CenterBlock } from '../../components/CenterBlock/CenterBlock.js'
import * as S from './HomePage.style.js'
import React from 'react'
import { getTracks } from '../../api/track.js'
import { tracksArr } from '../../tracks.array.js'

const { useState, useEffect } = React

const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [tracks, setTracks] = useState(tracksArr)
    const [trackId, setTracksId] = useState({})

    const getTrackData = (key) => {
        const result = tracks.findIndex((item) => item.id === key)
        setTracksId(tracks[result])
    }

    useEffect(() => {
        getTracks().then((response) => {
            setIsLoading(false)
            setTracks(response)
        })
    }, [])

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
                        />
                        <Sidebar isLoading={isLoading} />
                    </S.Main>
                    <Bar isLoading={isLoading} trackId={trackId} />
                    <footer></footer>
                </S.Container>
            </S.Wrapper>
        </div>
    )
}

export { HomePage }
