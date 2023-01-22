import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./BeerDetails.css"

export default function BeerDetails(){
    
    const beerId = useParams().beerId || "random"

    const apiURL = process.env.REACT_APP_API_URL

    const [oneBeer,setOneBeer]= useState(null)

    useEffect(() => {
      axios
        .get(apiURL + "/" + beerId)
        .then((response) => {
          console.log(response.data);
          setOneBeer(response.data)
        })
        .catch((error) => {
          console.log("something happened getting one beer", error);
        });
    },[]);

    const renderBeerDetails=(beerObj)=>{
        return(
            <>
                <div className="beer-img-container">
                    <img src={beerObj.image_url} alt="beer"/>

                </div>
                <h2>{beerObj.name}</h2>
                <h4>{beerObj.tagline}</h4>
                <p>{beerObj.first_brewed}</p>
                <p>{beerObj.attenuation_level}</p>
                <p>{beerObj.description}</p>
                <h5>{beerObj.contributed_by}</h5>
            </>
        )
    }

   

        return (
          <>
            
            <div className="beer-details-container">
              {oneBeer === null ? "loading" : renderBeerDetails(oneBeer)}
            </div>
          </>
        );
}