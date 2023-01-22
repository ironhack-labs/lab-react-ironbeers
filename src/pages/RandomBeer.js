import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BeerDetails from './BeerDetails'


const RandomBeer = () => {
    const [beer, setBeer] = useState({})
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers').then(response => {
            const randomBeer = response.data[Math.floor(Math.random() * response.data.length)]
            return randomBeer

        }).then(response => {
            console.log(response)
            setBeer(response)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return <div>Loading...</div>
    }





    return (
        <div>
            <div className='beerDetails'>
                <img src={beer.image_url} alt={beer.name} className="beerDetailsImg" />
                <h2>{beer.name}</h2>
                <p>{beer.tagline}</p>
                <p>{beer.attenuation_level}</p>
                <p>{beer.description}</p>
                <p>{beer.contributed_by}</p>
            </div>
        </div>
    )
}

export default RandomBeer