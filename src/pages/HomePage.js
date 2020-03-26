import React from 'react'

import Stats from '../components/Stats'
import CountrySelector from '../components/CountrySelector'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return(
        <>
            <div>
                <Link to ="/indonesia">Go to Indonesia Statistics</Link>
            </div>
            <Stats url="https://covid19.mathdro.id/api"/>
            <CountrySelector />
        </>
    )
}

export default HomePage