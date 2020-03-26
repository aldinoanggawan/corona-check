import React, { useState } from 'react'

import useStats from '../utils/useStats'
import Stats from './Stats'

const CountrySelector = () => {
    const { stats: countries, loading, error } = useStats('https://covid19.mathdro.id/api/countries')
    
    const [selectedCountry, setSelectedCountry] = useState('IDN')    

    const handleChange = e => {
        setSelectedCountry(e.target.value)
    }

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error....</p>
    
    return (
        <>
            <h4>Select Country</h4>
            <select value={selectedCountry} onChange={handleChange}>
                {countries.countries.map((country) => (
                    <option value={country.iso3}>
                        {country.name}
                    </option>
                ))}
            </select>
            <h1>Currently Showing {selectedCountry}</h1>
            <Stats url= {`https://covid19.mathdro.id/api/countries/${selectedCountry}`} />
        </>
    )
}

export default CountrySelector