import React, { useState, useEffect }  from 'react'
import BeerCard from './BeerCard'
import axios from 'axios'

const BeerDetails = props => {

    const initialState = {
        currentBeer: {}
    }

    const [state, setState] = useState(initialState)

    useEffect(() => {
        const getBeer = async () => {
        try {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${props.match.params.id}`)
            setState(state => ({
                currentBeer: response.data
            }))
        } catch(err) {
            console.log("AXIOS ERROR : ", err);
        }
        }
        getBeer()
    }, [])

    console.log(state.currentBeer)

    return (
        <BeerCard
            image_url = {state.currentBeer.image_url}
            name = {state.currentBeer.name}
            attenuation_level = {state.currentBeer.attenuation_level}
            tagline = {state.currentBeer.tagline}
            first_brewed = {state.currentBeer.first_brewed}
            description = {state.currentBeer.description}
            contributed_by = {state.currentBeer.contributed_by}
        />
    )
}

export default BeerDetails
