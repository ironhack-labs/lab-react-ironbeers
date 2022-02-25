import { useEffect, useState } from "react";
import axios from "axios";

const RandomBeers = () => {

    const [beer, setBeer] = useState([]);

    useEffect(() => {
        loadRandomBeers()
    }, [])

    const loadRandomBeers = () => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/random`)

            .then(({ data }) => setBeer(data))

            .catch((err) => console.log(err))
    }

    return (
        <div className="beer-detail">
            <div className="beer-card">
                <img src={beer.image_url} alt={beer.name} />
                <h1>{beer.name}</h1>
                <p>{beer.tagline}</p>
                <p>{beer.first_brewed}</p>
                <p>{beer.attenuation_level}</p>
                <p>{beer.description}</p>
                <p>{beer.contributed_by}</p>
            </div>
        </div>
    );
}
export default RandomBeers