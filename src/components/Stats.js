import React from 'react'

import useStats from '../hooks/useStats'
import Loading from '../loading.svg'
import { H2, P, Card, Container } from '../styles/content'

const Stats = ({ url }) => {
  const { stats, loading, error } = useStats(url)
  if (loading) return <img src={Loading} alt='loading' />
  if (error) return <p>Error...</p>

  return (
    <>
      <Container stats>
        <Card>
          <H2>Total Cases</H2>
          <P stats>{stats.confirmed.value}</P>
        </Card>
        <Card>
          <H2>Recovered</H2>
          <P stats>{stats.recovered.value}</P>
        </Card>
        <Card>
          <H2>Deaths</H2>
          <P stats>{stats.deaths.value}</P>
        </Card>
      </Container>
    </>
  )
}

export default Stats
