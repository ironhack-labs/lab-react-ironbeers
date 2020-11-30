import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Header from '../Header/Header'
import './RandomBeer.css'

const RandomBeer = () => {
    const [randomBeer, setRandomBeer] = useState({})

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then((beersResults) => {
            console.log(beersResults)
            setRandomBeer(beersResults.data)
        })
        .catch((err) => {console.error(err)})
    },[])

    return(
        <div>
       <Header />
        <div className="randomBeer">
            <img src={randomBeer.image_url} alt="beer" />
            <h1>{randomBeer.name}</h1>
            <div className="randomBeerdiv">
                <p>{randomBeer.tagline}</p>
                <p>{randomBeer.attenuation_level}</p>
            </div>
            <p className="description">{randomBeer.description}</p>
            <p>{randomBeer.contributed_by}</p>
        </div>
       </div>
    )
}

export default RandomBeer;