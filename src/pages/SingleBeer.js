import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function SingleBeer() {
    const { id } = useParams();

    const [beers, setBeers] = useState([])

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then((response) => {
                setBeers(response.data);
            })
    }, [])

    const foundBeer = beers.find((beerDetails) => {
        return beerDetails._id === id;
    })

    return (
        <div>
            <Header />
             <img src={foundBeer.image_url} alt="" /> 
             <h1>{foundBeer.name}</h1>
                    <h2>{foundBeer.tagline}</h2>
                    <p>{foundBeer.first_brewed}</p>
                    <h3>{foundBeer.attenuation_level}</h3>
                    <p>{foundBeer.description}</p>
                    <p>Created by:{foundBeer.contributed_by}</p>
                    <Link to="/beers">Back to Beer List</Link>
   </div>
    )
}

export default SingleBeer;