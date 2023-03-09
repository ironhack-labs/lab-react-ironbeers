
import { useState, useEffect } from "react";
import axios from "axios";

function RandomBeer() {

    const [beerRandom, setRandom] = useState(null);

    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then((result) => {
                setRandom(result.data)
            })
    }, []);

    if (beerRandom) {
        return (
            <div className="beer-details">
                <div className="beer-div1" >
                    <img src={beerRandom.image_url} alt="" className="beer-image" />
                </div>
                <div className="beer-div2">
                    <h1>{beerRandom.name}</h1>
                    <h1 style={{ color: "gray" }}>{beerRandom.attenuation_level}</h1>
                </div>
                <div className="beer-div3">
                    <h4 style={{ color: "gray" }}>{beerRandom.tagline}</h4>
                    <h4>{beerRandom.first_brewed}</h4>
                </div>
                <div className="beer-div4">
                    <p>{beerRandom.description}</p>
                    <p style={{ color: "gray" }}>Created by: {beerRandom.contributed_by}</p>
                </div>
            </div>
        )
    }
}

export default RandomBeer;