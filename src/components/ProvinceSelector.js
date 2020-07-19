import React from 'react'

import useStats from '../hooks/useStats'
import Loading from '../loading.svg'
import { ContainerTable, Table } from '../styles/content'

const ProvinceSelector = () => {
  const { stats: provinces, loading, error } = useStats(
    'https://indonesia-covid-19.mathdro.id/api/provinsi'
  )

  if (loading)
    return (
      <ContainerTable>
        <img src={Loading} alt='loading' />
      </ContainerTable>
    )
  if (error) return <p>Error...</p>

  return (
    <>
      <ContainerTable>
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
      </ContainerTable>
    </>
  )
}

export default ProvinceSelector
