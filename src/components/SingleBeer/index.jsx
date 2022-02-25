import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleBeer = () => {
    const { beerId } = useParams();

    const [beer, setBeer] = useState([]);

    useEffect(() => {
        loadOneBeer()
    });

    const loadOneBeer = () => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)

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
export default SingleBeer