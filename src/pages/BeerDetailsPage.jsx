import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function BeerDetailsPage() {
    const {beerId} = useParams();
    const API = "https://ih-beers-api2.herokuapp.com/beers"
    const [beer, setBeer] = useState({})
    const [wait, setWait] = useState(true)

    useEffect(()=>{
        axios.get(`${API}/${beerId}`).then((response) => 
        setBeer(response.data))
        setWait(false)
    },[])

    return(
        <div>
            {wait&&<p>Loading</p>}
            {!wait&&
            <div>
                <h1>{beer.name}</h1>
                <p>{beer.tagline}</p>
                <p>{beer.first_brewed}</p>
                <p>{beer.attenuation_level}</p>
                <p>{beer.description}</p>
                <p>{beer.contributed_by}</p>
                <img src={beer.image_url}/>
            </div>}
        </div>
    )



}

export default BeerDetailsPage;