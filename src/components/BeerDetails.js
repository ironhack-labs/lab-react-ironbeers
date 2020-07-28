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

    const handleDelete = async (event) => {
        event.preventDefault()
        try {
            // returns a 404
            await axios.delete(`https://ih-beers-api2.herokuapp.com/beers/${state.currentBeer._id}`)
        } catch(err) {
            console.log("AXIOS ERROR : ", err);
        }
        props.history.push('/beers')
    }

    console.log(state.currentBeer)

    return (
        <div className="text-center">
            <BeerCard
            image_url = {state.currentBeer.image_url}
            name = {state.currentBeer.name}
            attenuation_level = {state.currentBeer.attenuation_level}
            tagline = {state.currentBeer.tagline}
            first_brewed = {state.currentBeer.first_brewed}
            description = {state.currentBeer.description}
            contributed_by = {state.currentBeer.contributed_by}
        />
            <button className="btn btn-danger m-3" onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default BeerDetails
