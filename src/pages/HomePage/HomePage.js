import { MainNav } from '../../components/MainNav/MainNav.js'
import { Sidebar } from '../../components/Sidebar/Sidebar.js'
import { CenterBlock } from '../../components/CenterBlock/CenterBlock.js'
import * as S from './HomePage.style.js'
import React from 'react'
import { getTracks } from '../../api/track.js'
import { useDispatch } from 'react-redux'
import { setTrack, setTrackArr } from '../../Store/actions/creators/track.js'
import { useSelector } from 'react-redux'
import {TracksSelector} from '../../Store/selectors/track.js'


const { useState, useEffect } = React

const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true)


    let tracks = useSelector(TracksSelector)
    console.log(tracks);
    const dispatch = useDispatch()

    const getTrackData = (key) => {
        const result = tracks.findIndex((item) => item.id === key)
        dispatch(setTrack(tracks[result]))
    }

    useEffect(() => {
        getTracks().then((response) => {
            setIsLoading(false)
            dispatch(setTrackArr(response))
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
                            getTrackData={getTrackData}
                        />
                        <Sidebar isLoading={isLoading} />
                    </S.Main>
                    <footer></footer>
                </S.Container>
            </S.Wrapper>
        </div>
    )
}

export { HomePage }
