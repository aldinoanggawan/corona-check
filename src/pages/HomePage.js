import React from 'react'

import Stats from '../components/Stats'
import CountrySelector from '../components/CountrySelector'

const HomePage = () => {
    return(
        <>
            <Stats url="https://covid19.mathdro.id/api"/>
            <CountrySelector />
        </>
    )
}

export default HomePage