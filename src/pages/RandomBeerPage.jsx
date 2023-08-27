import axios from "axios";
import { useState, useEffect } from "react";

function RandomBeersPage() {
    const [foundRandomBeer, setRandomBeer] = useState('');
    
    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random').then((response) => {
            setRandomBeer(response.data)
            console.log(response.data);
        });
    }, [])

    return (
        <div>
            <h3>Random Beer</h3>
                <div>
                    <img src={foundRandomBeer.image_url} alt="" />
                    <h1>{foundRandomBeer.name}</h1>
                    <p>{foundRandomBeer.tagline}</p>
                    <p>{foundRandomBeer.first_brewed}</p>
                    <p>{foundRandomBeer.description}</p>
                    <p>{foundRandomBeer.attenuation_level}</p>
                    <p>Created by:{foundRandomBeer.contributed_by}</p>
                </div>
        </div>
    )
}
export default RandomBeersPage;
