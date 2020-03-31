import React from 'react'
import useStats from '../utils/useStats'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

    @media only screen and (max-width: 768px) {
       display: block;
    }
`

const Table = styled.table`

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

const ProvinceSelector = () => {
    
    const { stats: provinces, loading, error } = useStats('https://indonesia-covid-19.mathdro.id/api/provinsi')

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>

    return(
        <>
            <Container>
                <Table>
                    <thead>
                        <tr>
                            <th>Provinsi</th>
                            <th>Terjangkit</th>
                            <th>Sembuh</th>
                            <th>Meninggal</th>
                        </tr>
                    </thead>
                    <tbody>
                    {provinces.data.map((province, i) => (
                            <tr key={i}>
                                <td>{province.provinsi}</td>
                                <td>{province.kasusPosi}</td>
                                <td>{province.kasusSemb}</td>
                                <td>{province.kasusMeni}</td>
                            </tr>
                    ))}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default ProvinceSelector