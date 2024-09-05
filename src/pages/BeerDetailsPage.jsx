import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

function BeerDetailsPage() {
    const { beerId } = useParams();
    const [beer, setBeer] = useState(null);

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/5fb6a86265b9c209606e10e2")
            .then(response => {
                console.log(response.data);
                setBeer(response.data);
            })
            .catch(error => {
                console.error("Couldnt get the beer detail: ", error);
            });
    }, [beerId]);

    if (!beer)
        return
    <p>Loading...</p>;

    return (
        <div>
            <img src={beer.image_url} alt={beer.name} style={{ height: "200px" }} />
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p><strong>First brewed:</strong> {beer.first_brewed}</p>
            <p><strong>Attenuation level:</strong> {beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>Contributed by:{beer.contributed_by}</p>
        </div>
    )




}

export default BeerDetailsPage;
