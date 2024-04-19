import { useState, useEffect } from "react";
import axios from "axios";

function RandomBeerPage() {
    const [ beer, setBeer ] = useState([]);

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then((response) => {
                console.log(response.data)
                setBeer(response.data)
            });
            return () => {
                console.log("unmount");
            };
    }, [])

    if (beer.length === 0) {
        return <div>Loading this beer...</div>;
    }

    return (
        <div>
            <div className="d-flex justify-content-center my-5">
                <img  src={beer.image_url} style={{width:'30%'}}/>
            </div>
            <div  className="mx-3">
                <div className="d-flex justify-content-between my-3">
                    <h1>{beer.name}</h1>
                    <h1>{beer.attenuation_level}</h1>
                </div>
                <div className="d-flex justify-content-between">
                    <small>{beer.tagline}</small>
                    <small><b>{beer.first_brewed}</b></small>
                </div>
                <h5 className="my-3">{beer.description}</h5>
                <small>{beer.contributed_by}</small>
                
            </div>
            
        </div>
    )
}

export default RandomBeerPage