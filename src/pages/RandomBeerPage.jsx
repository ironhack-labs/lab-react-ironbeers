import axios from "axios";
import { useState, useEffect } from "react";

function RandomBeersPage() {

    const [randomBeer, setRandomBeer] = useState(null)

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random/')
        .then((randomBeer) => {
            setRandomBeer(randomBeer.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [randomBeer])

    return (
        <div>
            {!randomBeer && <p>Loading...</p>}
            {randomBeer &&
            <div className="individual-beer-container">
            <img src={randomBeer.image_url} alt="" />
            <div className="each-beer">
                <h1>{randomBeer.name}</h1>
                <h2>{randomBeer.tagline}</h2> <p>{randomBeer.first_brewed}</p>
                <p>{randomBeer.attenuation_level}</p>
                <p>{randomBeer.description}</p>
                <p>{randomBeer.contributed_by}</p>
            </div>
        </div>
            }
        </div>
    )
}

export default RandomBeersPage;
