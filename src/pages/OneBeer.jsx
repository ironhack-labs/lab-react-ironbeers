import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import beerService from '../services/beer.services'

const OneBeer = () => {

    const { beer_id } = useParams()

    const [beer, setBeer] = useState([])

    const loadBeer = () => {

        beerService
            .getOneBeer(beer_id)
            .then(({ data }) => setBeer(data))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        loadBeer()
    }, [])

    const { image_url, name, tagline, first_brewed,
        attenuation_level, description, contributed_by } = beer

    return (

        <Container>
            <h1>Details</h1>
            <img src={image_url} alt={name} style={{ width: '20%' }} />
            <h1>{name}</h1>
            <h5>{tagline}</h5>
            <p>{first_brewed}</p>
            <p>{attenuation_level}</p>
            <p>{description}</p>
            <p>{contributed_by}</p>
        </Container>

    )
}

export default OneBeer