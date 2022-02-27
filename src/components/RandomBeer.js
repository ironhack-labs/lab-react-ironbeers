import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function RandomBeer() {
    const [randomBeer, setRandomBeer] = useState([])

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(response => {
                console.log(response.data)
                setRandomBeer(response.data)
            })
            .catch(err => console.log(err))
        return () => {

        }
    }, [])


    return (
        <div>
            <header>
                <Link to='/'>Return Home</Link>
            </header>
            <h1>Random Beer</h1>
            <img src={randomBeer.image_url} alt="beer" className="beer-img" />
            <h2>{randomBeer.name}</h2>
            <h3>{randomBeer.tagline}</h3>
            <h4>{randomBeer.first_brewed}</h4>
            <h4>{randomBeer.attenuation_level}</h4>
            <p>{randomBeer.description}</p>
            <h4>{randomBeer.contributed_by}</h4>
        </div>
    )
}

export default RandomBeer