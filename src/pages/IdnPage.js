import React from 'react'

import ProvinceSelector from '../components/ProvinceSelector'
import { Link } from 'react-router-dom'

const IdnPage = () => {
    return(
        <>
            <div>
                <Link to="/">Go to Global Statistic</Link>
            </div>
            <ProvinceSelector />
        </>
    )
}

export default IdnPage