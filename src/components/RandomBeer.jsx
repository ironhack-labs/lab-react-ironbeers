import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BeerDetails from './BeerDetails'
import { Link } from 'react-router-dom'


export default function RandomBeer() {

    const [randomBeer, setRandomBeer] = useState([])
    
    const getRandomBeer = async () => {
        const foundBeer = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        setRandomBeer(foundBeer.data)
    }

    useEffect(() => {
        getRandomBeer()
    }, [])
    return (
        <div>
            <Link to={`/details/${randomBeer._id}`}> 
            Get Random Beer
            <BeerDetails beer={randomBeer} />
            </Link>
        </div>
    )
}
