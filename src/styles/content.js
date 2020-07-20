import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

// font weight 400, 500, 600

// typography (alphabetical order)
export const H1 = styled.h1`
  font-weight: 600;
  font-size: 2.5rem;
  margin-top: 0;
`

export const H2 = styled.h2`
  font-weight: 500;
  font-size: 1.9rem;
  text-align: left;
  margin-top: 0;
`

export const H3 = styled.h3`
  font-weight: 600;
  font-size: 1.7rem;
  margin: 0 0 0.5em;
`

export const P = styled.p`
  font-size: 1.2rem;

  ${({ stats }) =>
    stats &&
    css`
      font-size: 1.9rem;
      text-align: right;
      color: #303841;
      margin-bottom: 0;
    `}
`

// styled components (alphabetical order)
export const Card = styled.div`
  width: 270px;
  color: #000;
  background-color: #fff;
  border-radius: 5px;
  margin: 0 auto 1.5em;
  padding: 0.3em 0.5em;

  -webkit-box-shadow: 5px 5px 20px 0px rgba(230, 230, 230, 1);
  -moz-box-shadow: 5px 5px 20px 0px rgba(230, 230, 230, 1);
  box-shadow: 5px 5px 20px 0px rgba(230, 230, 230, 1);
`

export const Container = styled.div`
  max-width: 1100px;
  width: 90%;
  margin: 0 auto;
  text-align: center;

    ${({ country }) =>
      country &&
      css`
        margin-top: 2em;
        padding-top: 2em;
        border-top: 1px solid #dbdbdb;
      `}

  ${({ row }) =>
    row &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `}

  ${({ stats }) =>
    stats &&
    css`
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    `}
`

export const ContainerTable = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const Header = styled.header`
  background: #eeeeee;
  padding: 1em 0;
`

export const Img = styled.img`
  max-width: 150px;
`

export const Section = styled.section`
  background: #fcfcfc;
  padding: 1.8em 0 5em;
`

export const StyledLink = styled(Link)`
  ${({ navlogo }) =>
    navlogo &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  ${({ navbutton }) =>
    navbutton &&
    css`
      text-decoration: none;
      font-size: 1rem;
      font-weight: 500;
      border: 2px solid #00adb5;
      border-radius: 50px;
      color: #303841;
      padding: 0.15em 0.75em;

      &:focus,
      &:hover {
        background: #00adb5;
        color: #eeeeee;
      }
    `}
`

export const Table = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  min-width: 400px;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

  thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
  }

  th,
  td {
    padding: 12px 15px;
  }

  th {
    font-weight: 600;
  }

  tbody tr {
    font-weight: 400;

    border-bottom: 1px solid #dddddd;

    &:nth-child(even) {
      background-color: #f3f3f3;
    }

    &:last-of-type {
      border-bottom: 2px solid #009879;
    }
  }

  @media only screen and (max-width: 768px) {
    min-width: auto;

    th,
    td {
      font-size: 0.9em;
      padding: 6px 7px;
    }
  }
`
