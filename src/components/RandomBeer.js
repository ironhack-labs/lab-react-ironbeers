import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";


function RandomBeer() {
    const [randomBeer, setRandomBeer] = useState([])

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(response => {
                setRandomBeer(response.data)
            })
    }, [])


    return (
        <>
         {/* {randomBeer && */}
        <div>
            <Header />
            <div className="beer-details">
                <h1>{randomBeer.name}</h1>
                <img src={randomBeer.image_url} alt={randomBeer.name} style={{width : '120px'}}/>
                <p>Tagline: {randomBeer.tagline}</p>
                <p>First Brewed: {randomBeer.first_brewed}</p>
                <p>Brewers Tips: {randomBeer.brewers_tips}</p>
                <p>Attenuationa Level: {randomBeer.attenuation_level}</p>
                <p>Description: {randomBeer.description}</p>
                <p>Contributed by: {randomBeer.contributed_by}</p>
                <Link to='/'>
                    <button>Back to the Homepage</button>
                </Link>
            </div>
        </div>
        {/* } */}
    </>
    )
}

export default RandomBeer;
