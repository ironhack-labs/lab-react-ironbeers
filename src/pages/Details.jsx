import React from "react";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function BeerDetail() {
    const { beerId } = useParams();
    console.log("here is beerId", beerId);
    const [allBeers, setAllBeers] = useState();

  useEffect(() => {
    const getBeersFromDb = async () => {
      const { data } = await axios(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setAllBeers(data);
      console.log("here is data", data)
     
    };
    getBeersFromDb();
    
  }, []);
    
    if (!allBeers) {
    return <p>Loading...</p>;
  }

    return (
        <div>
            <header>
        <Link to={"/"}>Back to Home</Link>
      </header>
            <h1>Beer Detail</h1>
            {allBeers.map((beer) => {
                if (beer._id === beerId) {
                    return(
                        <div>
                           <img src={beer.image_url} alt={beer.name} className="allBeerDiv" />
            <h1>{beer.name}</h1>
            <h2>{beer.tagline}</h2>
            <h4>Created by: {beer.contributed_by}</h4>
                            <h4>First brewed: {beer.first_brewed}</h4>

                    </div>
                    
                    )
                    
                }
                    
                
            })}


        </div>
        


    )

}

export default BeerDetail;