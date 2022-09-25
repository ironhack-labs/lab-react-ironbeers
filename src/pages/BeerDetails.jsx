import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from 'axios';

function BeerDetails() {
    const API_URL = process.env.REACT_APP_BASE_URL;
    const [beerDetails, setBeerDetails] = useState({});
   

    const params = useParams();
    console.log("params.beerId", params.beerId);

    useEffect(()=>{
        axios.get(`${API_URL}/beers/${params.beerId}`)
        .then(response => setBeerDetails(response.data))
        .catch(err => console.log(err))
        // eslint-disable-next-line 
    }, [])

    // useEffect(() => {
    //     const currentBeer = beerDetails.find(beer => beer._id === params.beerId);

    //     if(currentBeer) {
    //         setBeerDetails(currentBeer);
    //     }
    //     // eslint-disable-next-line
    // },[params.beerId])

    if(Object.keys(beerDetails).length === 0){
        return <>
            <p>Loading...</p>
        </>
    }


    return (
        <div>
         
            <div>
            <h1>Beer Details</h1>
            <br/>
            

            <div className="beersImg">
                <img src={beerDetails.image_url} height="200" alt="beer" />
            </div>

            <div>
            <h3>{beerDetails.name}</h3>
                <h6>{beerDetails.tagline}</h6>
                <p>{beerDetails.first_brewed}</p>
                <p>{beerDetails.attenuation_level}</p>
                <p>{beerDetails.description}</p>
                <p>{beerDetails.contributed_by}</p>
            </div>
                
            </div>
           
         

        <Link to="/beers">Back</Link> 

        </div>
    );
}

export default BeerDetails;