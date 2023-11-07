import {useParams} from "react-router-dom";
const API_URL="https://ih-beers-api2.herokuapp.com/beers";
import axios from "axios";
import { useState, useEffect } from "react";
import "../App.css";

function BeerDetailsPage() {
    const {beerId} = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/${beerId}`).then((response)=>{
            setDetails(response.data);
            console.log(details)
        }).catch(error=>console.log(error))
    }, [])
    
    return(
        <div>
            <div>
                <p>{details.name}</p>
                <p>{details.tagline}</p>
                <p>{details.contributed_by}</p>
                <p>{details.first_brewed}</p>
                <p>{details.attenuation_level}</p>
            </div>
            <img src={details.image_url}/>
        </div>
    )
}

export default BeerDetailsPage;
