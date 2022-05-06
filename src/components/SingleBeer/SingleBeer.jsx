import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom'
import beerService from '../../services/beers.service'
import NavBarFixed from '../NavBar/NavBar'
const SingleBeer = () => {


    const [beerDetails, setBeerDetails] = useState([])
    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        beerService
            .getOneBeer(id)
            .then(({ data }) => setBeerDetails(data))
            .catch(err => console.log(err))
    }, [beerDetails])
    console.log(id)

    return (
        <>
            <NavBarFixed></NavBarFixed>

            <p>Single Beer</p>
            <p>{beerDetails.name}</p>
            <img src={beerDetails.image_url} alt="" />
            <p>{beerDetails.tagline}</p>
            <p>{beerDetails.first_brewed}</p>
            <p>{beerDetails.attenuation_level}</p>
            <p>{beerDetails.description}</p>
            <p>Contribuido por: {beerDetails.contributed_by}</p>
        </>
    )
}
export default SingleBeer