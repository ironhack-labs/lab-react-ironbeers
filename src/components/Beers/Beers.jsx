import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Beers = () => {

    const [beers, setBeers] = useState([])
    const [beersData, setBeersData] = useState([])

    useEffect(() => {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => {
                setBeers(response.data)
                setBeersData(response.data)
            })
    }, [])

    return (
        <>
            <h1>LAS CERVEZAAAS</h1>
            <ul>
                {beers.map(beers => {
                    return <li key={beers._id}>
                        <Link to={`/beers/${beers._id}`}>
                            <img src={beers.image_url} />
                            <h3>{beers.name}</h3>
                            <p>{beers.tagline}</p>
                        </Link>
                    </li>
                })
                }
            </ul>
        </>
    )
}

export default Beers