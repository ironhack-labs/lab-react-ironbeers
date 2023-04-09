import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function RandomBeer(props) {

    const [beerDeatils, SetBeerDetails] = useState([]);

    useEffect(() => {

        axios
            .get("https://ih-beers-api2.herokuapp.com/beers/random")
            .then((e) => {
                SetBeerDetails(e.data);
            })
            .catch(e => console.log(e))
    }, [])
    console.log(beerDeatils);

    return (
        <div>
            <img src={beerDeatils.image_url} alt="" />
            <h1>{beerDeatils.name}</h1>
            <h2>{beerDeatils.tagline}</h2>
            <h3>{beerDeatils.attenuation_level}</h3>
            <h3>{beerDeatils.description}</h3>

            <div>Created by: <span>{beerDeatils.contributed_by}</span></div>
            <Link to="/beers">Back</Link>
        </div >
    )

}


export default RandomBeer;