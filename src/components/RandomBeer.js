import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function RandomBeer(props) {
    const [randomBeers, setRandomBeers] = useState([])
    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then((response) => {
                setRandomBeers(response.data)
            })
            .catch((err) => console.log(err))
    }, [])


    return (
        <div>
            <Link to="/">Home</Link>
            <img src={randomBeers.image_url} alt="beer" style={{ width: "100px" }} />
            <h2>{randomBeers.name}</h2>
            <h3>{randomBeers.tagline}</h3>
            <h4>{randomBeers.first_brewed}</h4>
            <p>{randomBeers.attenuation_level}</p>
            <p>{randomBeers.description}</p>
            <p>{randomBeers.contributed_by}</p>
        </div>
    )
}


export default RandomBeer