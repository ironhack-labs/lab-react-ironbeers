import React, { useState, useEffect } from 'react'
import BeerCard from './BeerCard'
import axios from 'axios'

export default function RandomBeer() {

    const [randomBeer, setRandomBeer] = useState('')

    useEffect(() => {

        const fetchRandomData = async () => {
            const getRandom = await axios(
                'https://ih-beers-api2.herokuapp.com/beers/random'
            )
            setRandomBeer(getRandom.data)
        }
        fetchRandomData()

    }, [])

    console.log('RANDOM: ', randomBeer)

    return (
        <div>
            <BeerCard {...randomBeer} />
        </div>
    )
}
