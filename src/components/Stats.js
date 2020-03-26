import React from 'react'

import useStats from '../utils/useStats'

const Stats = ({ url }) => {
    const { stats, loading, error } = useStats(url)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>
    
    return (
       <>
        <div className="statBlock">
            <h4>Confirmed :</h4>
            <span>{stats.confirmed.value}</span>
        </div>
        <div className="statBlock">
            <h4>Recovered :</h4>
            <span>{stats.recovered.value}</span>
        </div>
        <div className="statBlock">
            <h4>Deaths :</h4>
            <span>{stats.deaths.value}</span>
        </div>
        <hr />
       </>
    )
}

export default Stats