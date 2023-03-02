import React, { useEffect, useState } from 'react'
import BeerDescription from '../../components/BeerDescription/BeerDescription'
import beersService from '../../services/beers.services'

const RandomBeerPage = () => {


    const [randomBeer, setRandomBeer] = useState({})

    useEffect(() => {
        beersService
            .getOneRandomBeer()
            .then(({ data }) => setRandomBeer(data))
            .catch(err => console.log(err))

    }, [])

    return (
        <BeerDescription beer={randomBeer} />
    )
}

export default RandomBeerPage