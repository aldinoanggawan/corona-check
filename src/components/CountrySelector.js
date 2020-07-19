import React, { useState } from 'react'

import Stats from './Stats'
import useStats from '../hooks/useStats'
import { H3, P, Container } from '../styles/content'

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
      <Container country>
        <H3>Select Country</H3>
        <select value={selectedCountry} onChange={handleChange}>
          {countries.countries.map(country => (
            <option name={country.name} key={country.name} value={country.iso3}>
              {country.name}
            </option>
          ))}
        </select>
        <P>Currently Showing COVID-19 Statistic in {selectedCountry}</P>
      </Container>
      <Stats url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`} />
    </>
  )
}

export default CountrySelector
