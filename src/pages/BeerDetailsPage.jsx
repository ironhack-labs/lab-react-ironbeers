import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers"

function BeerDetailsPage() {

    const {beerId} = useParams();

    const [details, setDetails] = useState();

    useEffect(()=>{
        axios.get(`${API_URL}/${beerId}`).then((response)=>{
            const beerDetail = response.data;
            setDetails(beerDetail);
        })
        .catch((error) =>console.log(error));
    }, [])

    return(
        <div>
            {details && (
            <div> 
                <img src={details.image_url}/>
                <h2>{details.name}</h2>
                <h4>{details.tagline}</h4>
                <p>{details.first_brewed}</p>
                <p>{details.attenuation_level}</p>
                <p>{details.description}</p>
                <p>{details.contributed_by}</p>
            </div>
            )}
            
            <Link to="/" className="back-button"> Back </Link>
        </div>
    )

}

export default BeerDetailsPage;
