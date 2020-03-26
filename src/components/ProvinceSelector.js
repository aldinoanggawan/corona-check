import React from 'react'

import useStats from '../utils/useStats'

const ProvinceSelector = () => {
    const { stats: provinces, loading, error } = useStats('https://indonesia-covid-19.mathdro.id/api/provinsi')
    console.log(provinces)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>

    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>Provinsi</th>
                        <th>Terjangkit</th>
                        <th>Sembuh</th>
                        <th>Meninggal</th>
                    </tr>
                </thead>
                {provinces.data.map((province) => (
                    <tbody key={province.fid}>
                        <tr>
                            <td>{province.provinsi}</td>
                            <td>{province.kasusPosi}</td>
                            <td>{province.kasusSemb}</td>
                            <td>{province.kasusMeni}</td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </>
    )
}

export default ProvinceSelector