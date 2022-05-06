import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import beersService from '../../Services/BeerServices'


function RandomBeer() {

    const [beerDetails, setBeerDetails] = useState({})
    const { id } = useParams()


    useEffect(() => {
        beersService
            .randomBeer()
            .then(({ data }) => setBeerDetails(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>

            <img style={{ width: '20%' }} src={beerDetails.image_url} alt={beerDetails.name} />
            <h3>Name: {beerDetails.name}</h3>
            <p>{beerDetails.tagline}</p>
            <p>First brewed: {beerDetails.first_brewed}</p>
            <p>Attenuation level: {beerDetails.attenuation_level} </p>
            <p>Description: {beerDetails.description}</p>
            <p>Contributed_by: {beerDetails.contributed_by}</p>

        </>
    )
}

export default RandomBeer

