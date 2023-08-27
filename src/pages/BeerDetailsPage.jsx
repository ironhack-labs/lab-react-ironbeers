import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


function BeerDetailsPage() {
    const [foundBeer, setFoundBeer] = useState(null);

    const [fetching, setFetching] = useState(true);

    const {beerId} = useParams();

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`).then((response) => {
            setFoundBeer(response.data)
            setFetching(false);
            console.log(response.data);
        }, [beerId]);
    })

    return (
        <div>
            <h3>Beer Details</h3>
            {!foundBeer && <p>Beer not found</p>}
            {foundBeer && (
                <div>
                    <img src={foundBeer.image_url} alt="" />
                    <h1>{foundBeer.name}</h1>
                    <p>{foundBeer.tagline}</p>
                    <p>{foundBeer.first_brewed}</p>
                    <p>{foundBeer.description}</p>
                    <p>{foundBeer.attenuation_level}</p>
                    <p>Created by:{foundBeer.contributed_by}</p>
                </div>
            ) }
        </div>
    )
}

export default BeerDetailsPage;
