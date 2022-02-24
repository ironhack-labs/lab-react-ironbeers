import { useEffect, useState } from "react"
import Header from '../../components/Header/Header'

import axios from "axios"

const RandomBeer = () => {

    const [randomBeer, setRandomBeer] = useState()

    useEffect(() => {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then((response) => {
                setRandomBeer(response.data)
            })
    }, [])

    return (
        <div>
            <Header />
            <img src={randomBeer?.image_url} />
            <h3>{randomBeer?.name}</h3>
            <p>{randomBeer?.attenuation_level}</p>
            <h4>{randomBeer?.tagline}</h4>
            <p>{randomBeer?.first_brewed}</p>
            <p>{randomBeer?.description}</p>
            <p>{randomBeer?.contributed_by}</p>
        </div>
    )
}

export default RandomBeer