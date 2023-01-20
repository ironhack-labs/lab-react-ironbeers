import {  NavLink,Link } from "react-router-dom";
import axios from 'axios';
import { useState,useEffect } from 'react';

function RandomBeer (){

    const [randomBeer, setRandomBeer] = useState([]);

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        console.log(response.data);

        setRandomBeer(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    
      }, []);

    return (
       <>
          <nav>
            <NavLink to="/">Home</NavLink>
            </nav>
            <div className="box">
          <div className="card">
          <p><img src = {randomBeer.image_url} alt = "beerpic" /></p>
            <h1>{randomBeer.name} </h1>
            <p>Tagline: {randomBeer.tagline} </p> <br />
         <p>Description: {randomBeer.description} </p> <br />
       
         <p>first brewed: {randomBeer.first_brewed} </p> <br />
         <p>attenuation level: {randomBeer.attenuation_level} </p> <br />
         <p>contributed by: {randomBeer.contributed_by} </p> <br />
         </div>
         </div>
         </>
    )
}


export default RandomBeer;