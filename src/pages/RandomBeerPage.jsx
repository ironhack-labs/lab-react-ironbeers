import { useState, useEffect } from "react";
import axios from "axios";

function RandomBeersPage() {
    const [randomBeer, setRandomBeer] = useState()

    useEffect(() =>{
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then ((response)=>{
            setRandomBeer(response.data)
            console.log(response.data)
        })
    }, [])
    if (!randomBeer) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <div><img src={randomBeer.image_url}
                          style={{ height: '100px', objectFit: 'contain' }}/></div>
            <h3>{randomBeer.name}</h3>
            <h3>{randomBeer.tagline}</h3>
            <h3>{randomBeer.first_brewed}</h3>
            <h3>{randomBeer.attenuation_level}</h3>
            <h3>{randomBeer.description}</h3>
            <h3>{randomBeer.contributed_by}</h3>
        </div>
    )
}

export default RandomBeersPage;
