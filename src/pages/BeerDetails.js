import axios from "axios";
import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

function BeerDetails(){
    const [singleBeer, setSingleBeer] = useState({});
    const { beerId } = useParams();
    //console.log(beerId);

    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then(res => setSingleBeer(res.data))
        .catch(err => console.log(err))
    }, [beerId])

    console.log(singleBeer);

    return(
        <>
        <Header />
        <h2>Details</h2>
        <div className="card">
            <div style={{height: "90vh", width: "90vh"}} className="d-flex justify-content-center align-items-center">
                <img src={singleBeer["image_url"]} alt={singleBeer.name} className="card-image-top h-75"/>
            </div>
            
            <div className="card-body">
                <div className="card-title d-flex flex-row justify-content-between">
                    <h2>{singleBeer.name}</h2>
                    <h3>{singleBeer["attenuation_level"]}</h3>
                </div>
                <div className="card-title d-flex flex-row justify-content-between">
                    <h4>{singleBeer.tagline}</h4>
                    <h6>{singleBeer["first_brewed"]}</h6>
                </div>
                <div>
                    <p>{singleBeer.description}</p>
                    <small>{singleBeer["contributed_by"]}</small>
                </div>
            </div>
        </div>
        </>
    )
}

export default BeerDetails;