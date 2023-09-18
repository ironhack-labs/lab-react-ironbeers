import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function RandomBeerPage() {
    const [beerDetails, setBeerDetails] = useState(null)

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/beers/random`)
        .then(response => {
            console.log(response.data);
            setBeerDetails(response.data);
        })
        .catch(e => console.log("error to get beer details", e))
    }, [])


    
    if(beerDetails === null) {
        // return <p>Loading...</p>
    } else {

    return (
        <section key={beerDetails._id} className="card">
            <img src={beerDetails.image_url}/>
            <h3>{beerDetails.name}</h3>
            <h4>{beerDetails.tagline}</h4>
            <h5>{beerDetails.first_brewed}</h5>
            <h4>{beerDetails.attenuation_level}</h4>
            <p>{beerDetails.description}</p>
            <h5>Created by:{beerDetails.contributed_by}</h5>

        </section>
    )
}
}



export default RandomBeerPage;
