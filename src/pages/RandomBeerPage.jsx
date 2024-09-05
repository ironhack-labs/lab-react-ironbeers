import { useEffect, useState } from 'react';
import axios from "axios";

function RandomBeersPage() {
    const [beer, setBeer] = useState(null);

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
            .then(response => {
                console.log(response.data);
                setBeer(response.data);
            })
            .catch(error => {
                console.error("Couldnt get the random beer ", error);
            });
    }, []);

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

export default RandomBeersPage;
