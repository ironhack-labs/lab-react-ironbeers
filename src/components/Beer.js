import Header from "./Header";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Beer() {
    const [beer, setBeer] = useState(null)

    const { beerID } = useParams();
    console.log(beerID)
    useEffect(() => {
        if (!beerID) {
            fetch("https://ih-beers-api2.herokuapp.com/beers/random")
                .then(response => response.json())
                .then(data => setBeer(data))
                .catch(error => console.log(error))
        }
        
        else {
            fetch("https://ih-beers-api2.herokuapp.com/beers/" + beerID)
            .then(response => response.json())
            .then(data => setBeer(data))
            .catch(error => console.log(error))
        }
    }, [beerID])

    return(
        <>
            <Header />
            {beer !== null ? 
                <div className="singleBeerDiv">
                    <div className="singleBeerImageDiv">
                        <img src={beer.image_url} alt="" />
                    </div>
                    <div className="singleBeerTextDiv">
                        <div className="firstRowText">
                            <h1>{beer.name}</h1>
                            <h1 className="attenuation">{beer.attenuation_level}</h1>
                        </div>
                        <div className="secondRowText">
                            <h3 className="tagline">{beer.tagline}</h3>
                            <b><p>{beer.first_brewed}</p></b>
                        </div>
                        <p className="description">{beer.description}</p>
                        <h4 className="contributedBy">{beer.contributed_by}</h4>
                    </div>
                </div>
            : <></>}
        </>
    )
}

export default Beer;