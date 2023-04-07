import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import NavBar from "./NavBar";

function BeerDetails() {

    const [beer, setBeer] = useState(null);
    const isMounted = useRef(true);

    const {beerId} = useParams();
    
    
    useEffect(() => {

        if(isMounted.current) {

            isMounted.current = false;

            if(beerId) {
                axios.get(process.env.REACT_APP_APIURL + `/${beerId}`)
                    .then((response) => {
                        setBeer(response.data);
                    })
                    .catch((err) => {
                        console.error(err);
                    });
            } else {
                axios.get(process.env.REACT_APP_APIURL + `/random`)
                    .then((response) => {
                        setBeer(response.data);
                    }).catch((err) => {
                        console.error(err);
                    });
            }
        }
    }, [beerId])

    const renderBeer = () => {
        return (
            <>
                <img src={beer.image_url} alt={beer.name} />
                <h3>{beer.name}</h3>
                <h4>{beer.tagline}</h4>
                <p>First Brewed: {beer.first_brewed}</p>
                <p>Attenuation Level: {beer.attenuation_level}</p>
                <p>Description: {beer.description}</p>
                <p>Created by: {beer.contributed_by}</p>
            </>
        );
    };

    return(
        <>
            <NavBar/>

            {beer ? renderBeer() : <h1>Loading...</h1>}

            <Link to={"/beers"}>Go Back</Link>
        </>
    );
}

export default BeerDetails;