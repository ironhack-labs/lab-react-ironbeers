import axios from 'axios'
import { useEffect, useState } from 'react'
import Header from "./Header";



function RandomBeer () {

    const [randomBeer, setRandomBeer]= useState([]);

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
            .then((response) => {
                setRandomBeer(response.data)
                console.log(response.data)
            })
            .catch(e => console.log('err while getting random beer', e))

    }, [])


return (
    <div>
        <Header />
        <h1>this is the random Beer Page</h1>
     
        <img src={randomBeer.image_url} alt="beer"></img>
            <h3>{randomBeer.name}</h3>
            <p>{randomBeer.tagline}</p>
            <p>{randomBeer.first_breed}</p>
            <p>{randomBeer.attenuation_level}</p>
            <p>{randomBeer.description}</p>
            <p>{randomBeer.contributed_by}</p>

    </div>
)
}
export default RandomBeer