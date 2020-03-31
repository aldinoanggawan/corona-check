import React from 'react'
import styled from 'styled-components'

import Stats from '../components/Stats'
import CountrySelector from '../components/CountrySelector'

const TitleContainer = styled.div`
    text-align: center;
    font-weight: 600;
    font-size: 50px;
`

const HomePage = () => {

    return(
        <>
            <TitleContainer>
                <div>Global Statistic</div>
            </TitleContainer>
            <Stats url="https://covid19.mathdro.id/api"/>
            <hr></hr>
            <CountrySelector />
        </>
    )
}

export default HomePage