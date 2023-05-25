import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const BeersList = ({ beers }) => {

    const [beersRender, setBeersRender] = useState([])
    useEffect(() => {
        setBeersRender(beers)
    }, [beers])

    return (
        <div className='beersList-container'>
            <table className='beersList-table'>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Tagline</th>
                        <th>Create</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        beersRender.map(elm => {
                            return (
                                <tr key={elm._id}>
                                    <td><img src={elm.image_url} alt="" width="40px" /></td>
                                    <td>{elm.name}</td>
                                    <td>{elm.tagline}</td>
                                    <td>{elm.name}</td>
                                    <td><Link to={`/beers/${elm._id}`}>Details</Link> </td>
                                </tr>
                            )

                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default BeersList