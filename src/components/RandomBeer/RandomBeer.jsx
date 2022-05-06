import { useState } from 'react';
import randomBeersService from '../../services/beers.service'
import { useEffect } from 'react'

function RandomBeer(){
    
    const [randomBeer, setRandomBeer] = useState([])

    useEffect(() => {
        loadRandomBeer()
    }, [])

    const loadRandomBeer = () => {
        randomBeersService
            .getRandomBeer()
            .then(({data}) => setRandomBeer(data))
    }

    return (
        <div>
            <img src={randomBeer.image_url} alt=''/>
            <p>
            {randomBeer.name}
            </p>
            <p>
            {randomBeer.tagline}
            </p>
            <p>
            {randomBeer.first_brewed}
            </p>
            <p>
            {randomBeer.attenuation_level}
            </p>
            <p>
            {randomBeer.description}
            </p>
            <p>
            {randomBeer.contributed_by}
            </p>
            

        </div>
    )
}

export default RandomBeer