import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
    const {beerId} = useParams()
    const [foundBeer, setFoundBeer] = useState('');

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`).then((response) => {
            setFoundBeer(response.data);
        })
    }, []);

    return (
        <div>
            <h1>Beer Details</h1>
                <div>
                    <img src={foundBeer.image_url}/>
                    <h2>{foundBeer.name}</h2>
                    <h2>{foundBeer.tagline}</h2>
                    <h2>{foundBeer.first_brewed}</h2>
                    <h2>{foundBeer.attenuation_level}</h2>
                    <h2>{foundBeer.description}</h2>
                    <h2>{foundBeer.contributed_by}</h2>
                </div>
        </div>
    )
}


export default BeerDetailsPage;
