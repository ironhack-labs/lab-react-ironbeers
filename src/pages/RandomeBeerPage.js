import React from 'react';
import Navbar from '../components/Navbar';
import axios from "axios";
import { useState, useEffect } from "react";

function RandomBeersPage() {
    const [beerRandom, setBeerRandom] = useState([]);

    // This effect will run only once after the initial render 
    useEffect(() => {
      axios
        .get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then((response) => {
          console.log("response.data", response.data);
          setBeerRandom(response.data); 
        });
    }, []);

  return (
    <div>
        <Navbar/>
        <div className="beer-detail container">
            <h1>BeersPage</h1>
       
                <div key={beerRandom._id} className="row ">
              
                        <div className="col-12 col-sm-10 col-md-5 col-lg-5 col-xl-5 list-image">
                            <img src={beerRandom.image_url} alt={beerRandom.name} />
                        </div>
                        <div className="col-12 col-sm-10 col-md-7 col-lg-7 col-xl-7 list-data">
                            <h3>{beerRandom.name}</h3>
                            <h5>{beerRandom.tagline}</h5>
                            <p><span className="bold">First brewed:</span> {beerRandom.first_brewed}</p>
                            <p><span className="bold">Attenuation level:</span> {beerRandom.attenuation_level}</p>
                            <p><span className="bold">Description:</span></p>
                            <p>{beerRandom.description}</p>
                            <p><span className="bold">Created by:</span> {beerRandom.contributed_by}</p>
            

                            {/* /beers/:beerId */}
                        </div>
        
                </div>
       


    
        </div>
    </div>
  );
}

export default RandomBeersPage;
