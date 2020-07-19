import React from 'react'

import CountrySelector from '../components/CountrySelector'
import Stats from '../components/Stats'
import { H1, Container, Section } from '../styles/content'

const HomePage = ({ setIsGlobalPage }) => {
  return (
    <Section>
      <Container>
        <H1>Global Statistic</H1>
        <Stats url='https://covid19.mathdro.id/api' />
        <CountrySelector />
      </Container>
    </Section>
  )
}

export default HomePage
