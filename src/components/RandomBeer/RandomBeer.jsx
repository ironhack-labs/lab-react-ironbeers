import { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'
import beerService from '../../services/beers.service'
import NavBarFixed from '../NavBar/NavBar'

const RandomBeer = () => {


    const [beerDetails, setBeerDetails] = useState([])

    useEffect(() => {
        beerService
            .getRandomBeer()
            .then(({ data }) => setBeerDetails(data))
            .catch(err => console.log(err))
    }, [])

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
export default RandomBeer