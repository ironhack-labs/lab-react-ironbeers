import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


function BeerDetails() {

    const [beerSelected, setBeer] = useState(null);

    const { beerId } = useParams();

    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then((result) => {
                console.log(result.data)
                setBeer(result.data)
            })
    }, [beerId]);

    if (beerSelected) {
        return (
            <div className="beer-details">
                <div className="beer-div1" >
                    <img src={beerSelected.image_url} alt="" className="beer-image" />
                </div>
                <div className="beer-div2">
                    <h1>{beerSelected.name}</h1>
                    <h1 style={{ color: "gray" }}>{beerSelected.attenuation_level}</h1>
                </div>
                <div className="beer-div3">
                    <h4 style={{ color: "gray" }}>{beerSelected.tagline}</h4>
                    <h4>{beerSelected.first_brewed}</h4>
                </div>
                <div className="beer-div4">
                    <p>{beerSelected.description}</p>
                    <p style={{ color: "gray" }}>Created by: {beerSelected.contributed_by}</p>
                </div>
            </div>
        );
    }
}
export default BeerDetails;