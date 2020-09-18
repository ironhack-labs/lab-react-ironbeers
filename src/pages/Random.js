import React, {useState, useEffect} from 'react'
import {getRandom} from '../services/beers'

const Random = () => {

    const [randomBeer, setRandomBeer] = useState(null)

    const fetchRandom = async () => {
        const beer = await getRandom()
        setRandomBeer(beer)
        console.log('hola')
    }

    useEffect(() => {
        fetchRandom()
    }, [])

    return (
        randomBeer ? (
            <div>
                <p>{randomBeer}</p>
            </div>
        ) : (
            <p>Loading...</p>
        )
    )
}

export default Random
