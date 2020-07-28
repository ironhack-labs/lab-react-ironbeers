import React, { useState, useEffect }  from 'react'
import BeerCard from './BeerCard'
import axios from 'axios'

const RandomBeer = () => {

    const initialState = {
        randomBeer: {}
    }

    const [state, setState] = useState(initialState)

    useEffect(() => {
        const getBeer = async () => {
            try {
                const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
                setState(state => ({
                    randomBeer: response.data
                }))
            } catch(err) {
                console.log("AXIOS ERROR : ", err);
            }
        }
        getBeer()
    }, [])

    console.log(state.randomBeer)

    return (
        <BeerCard
            image_url = {state.randomBeer.image_url}
            name = {state.randomBeer.name}
            attenuation_level = {state.randomBeer.attenuation_level}
            tagline = {state.randomBeer.tagline}
            first_brewed = {state.randomBeer.first_brewed}
            description = {state.randomBeer.description}
            contributed_by = {state.randomBeer.contributed_by}
        />
    )
}

export default RandomBeer
