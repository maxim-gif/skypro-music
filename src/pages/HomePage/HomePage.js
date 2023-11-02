import { MainNav } from '../../components/MainNav/MainNav.js'
import { Sidebar } from '../../components/Sidebar/Sidebar.js'
import { CenterBlock } from '../../components/CenterBlock/CenterBlock.js'
import * as S from './HomePage.style.js'
import React from 'react'
import { getTracks } from '../../api/track.js'
import { useDispatch } from 'react-redux'
import { setTrackArr } from '../../Store/actions/creators/track.js'
import { AuthContext } from '../../context/authContext.js'

const { useState, useEffect, useContext } = React

const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const { handleGetCompilationsFavorite, likeUpdated, setAuthorList } =
        useContext(AuthContext)

    const dispatch = useDispatch()

    useEffect(() => {
        getTracks().then((response) => {
            handleGetCompilationsFavorite()
            setIsLoading(false)
            setAuthorList([...new Set(response.map((item) => item.author))])
            dispatch(setTrackArr(response))
        })
    }, [likeUpdated])

    return (
        <div>
            <S.Wrapper>
                <S.Container>
                    <S.Main>
                        <MainNav />
                        <CenterBlock isLoading={isLoading} />
                        <Sidebar isLoading={isLoading} />
                    </S.Main>
                    <footer></footer>
                </S.Container>
            </S.Wrapper>
        </div>
    )
}

export { HomePage }
