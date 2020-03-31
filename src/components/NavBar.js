import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 30px 0px;

    .logo {
        cursor: pointer;
        height: 100px;
        width: 100px;
    }

    button {
        padding: 9px 20px;
        border: 2px solid blue;
        border-radius: 20px;
        cursor: pointer;
        color: black;
        font-weight: 600;
        font-size: 15px;
    }

    @media(max-width:768px) {
        padding: 0px 10px;
    }
`

const NavBar = () => {
    return(
        <>
            <Nav>
                <Link to="/">
                    <img src="/navlogo.png" className="logo"></img>
                </Link>
                <Link to="/indonesia">
                    <button>Indonesia Statistic</button>
                </Link>
            </Nav>
        </>
    )
}

export default NavBar