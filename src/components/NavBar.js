import React from 'react'
import { useLocation } from 'react-router-dom'

import { Container, Header, Img, StyledLink } from '../styles/content'

const NavBar = () => {
  const location = useLocation()

  return (
    <Header>
      <Container row>
        <StyledLink navlogo='true' to='/'>
          <Img src='/navlogo.png' alt='logo' />
        </StyledLink>
        {location.pathname === '/' && (
          <StyledLink navbutton='true' to='/indonesia'>
            Indonesia Stats
          </StyledLink>
        )}
      </Container>
    </Header>
  )
}

export default NavBar
