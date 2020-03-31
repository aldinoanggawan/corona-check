import React from 'react'

import useStats from '../utils/useStats'
import styled from 'styled-components'

import Loading from '../loading.svg'

const StatContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 10px;
    margin-bottom: 20px;

    div {
        background-color: #fff;
        box-shadow: 0px 4px 20px 0px rgba(0,0,0,0.15);
        border-radius: 5px;
        color: #000;
        display: flex;
        justify-content: space-between;
        font-size: 1.2em;
        position: relative;
        margin-bottom: 20px;
        height: 150px;
        width: 265px;
    }
    
    div .text {
        font-size: 20px;
        font-weight: 400;
    }
    
    div .number {
        font-weight: 500;
        font-size: 45px;
    }
`

const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
`

const Stats = ({ url }) => {
    const { stats, loading, error } = useStats(url)
    if (loading) return <LoadingContainer><img src={Loading} /></LoadingContainer>
    if (error) return <p>Error...</p>
    
    return (
       <>
        <StatContainer>
            <div className="box1">
                <p className="text">Total Cases</p>
                <p className="number">{stats.confirmed.value}</p>
            </div>
            <div className="box2">
                <p className="text">Recovered</p>
                <p className="number">{stats.recovered.value}</p>
            </div>
            <div className="box3">
                <p className="text">Deaths</p>
                <p className="number">{stats.deaths.value}</p>
            </div>
        </StatContainer>
       </>
    )
}

export default Stats