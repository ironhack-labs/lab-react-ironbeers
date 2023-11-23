import axios from "axios";
import { useState, useEffect } from "react";



function RandomBeersPage() {

    const [beer, setBeer] = useState({})

    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then(({ data }) => setBeer(data))
            .catch(err => console.log(err))

    }, [])

    return (
        <div className="details">

            <img src={beer.image_url} alt="" />
            <div className="info">
                <h1>{beer.name}</h1>
                <p>{beer.tagline}</p>
                <p>{beer.first_brewed}</p>
                <p>{beer.attenuation_level}</p>
                <p>{beer.description}</p>
                <p>{beer.contributed_by}</p>
            </div>



        </div>

    )
}

export default RandomBeersPage;
