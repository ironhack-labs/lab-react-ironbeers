import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'


function BeerDetails() {

    const { id } = useParams()
    const [beers, setBeer] = useState({})

    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            .then((response) => {
                setBeer(response.data)
            })
            .catch((err) => console.log(err))
    })


    return (
        <div>
            <Link to="/">Home</Link>
            <img src={beers.image_url} alt='beer' />
            <h2>{beers.name}</h2>
            <h3>{beers.tagline}</h3>
            <h4>{beers.first_brewed}</h4>
            <p>{beers.attenuation_level}</p>
            <p>{beers.description}</p>
            <p>{beers.contributed_by}</p>
        </div>
    )
}


export default BeerDetails