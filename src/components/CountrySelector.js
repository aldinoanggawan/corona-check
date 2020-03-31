import React, { useState } from 'react'
import styled from 'styled-components'

import useStats from '../utils/useStats'
import Stats from './Stats'

const TitleContainer = styled.div`
    text-align: center;
`

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
            <TitleContainer>
                <h3>Select Country</h3>
                <select value={selectedCountry} onChange={handleChange}>
                    {countries.countries.map((country) => (
                        <option name={country.name} key={country.name} value={country.iso3}>
                            {country.name}
                        </option>
                    ))}
                </select>
                <p>Currently Showing COVID-19 Statistic in {selectedCountry}</p>
            </TitleContainer>
            <Stats url= {`https://covid19.mathdro.id/api/countries/${selectedCountry}`} />
        </>
    )
}

export default CountrySelector