import axios from 'axios'
import { useState, useEffect } from 'react'
import BeerDetailsCard from '../../components/BeerDetailsCard/BeerDetailsCard'
import beersService from '../../services/beers.services'
import BeerCard from './../../components/BeerCard/BeerCard'


const BeerRandom = () => {

    const [oneBeer, setOneBeer] = useState([])

    useEffect(() => {

        beersService
            .getRandomBeer()
            .then(({ data }) => setOneBeer(data))
            .catch(err => console.log(err))

    }, [])


    return <BeerDetailsCard beer={oneBeer} />
}

export default BeerRandom