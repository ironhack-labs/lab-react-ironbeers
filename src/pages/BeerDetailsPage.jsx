import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'


function BeerDetailsPage({beers, setBeers}) {

    const {beerId} = useParams()
    console.log(beerId)
    
    const selectedBeer = beers.find((oneBeer)=>{
        return oneBeer._id === beerId
    })
    console.log(selectedBeer)
    return(
        <div className="be_Det_PageDiv">
            <img className="beerPicture" src={selectedBeer?.image_url} alt="" />
            
            <div className="spaceBet">
                <h1 className="beerName">{selectedBeer?.name}</h1>
                <h2 className="attenuation">{selectedBeer?.attenuation_level}</h2>
            </div>
            <div className="spaceBet">
                <h1 className="beerName">{selectedBeer?.tagline}</h1>
                <h2 className="attenuation">{selectedBeer?.first_brewed}</h2>
            </div>
            
            <p>{selectedBeer?.description}</p>
            <p>{selectedBeer?.contributed_by}</p>
        </div>
    )
}

export default BeerDetailsPage;
