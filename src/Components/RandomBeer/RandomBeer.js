import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";


const RandomBeer = () => {
    const [beer, setBeer] = useState({
        image: '',
        name: '',
        tagline: '',
        first_brewed:'',
        attenuation_level:'',
        description:'',
        contributed_by:'',
            });

    useEffect(() => {
        axios
          .get("https://ih-beers-api2.herokuapp.com/beers/random")
          .then((response) => {
            //console.log(response);
           setBeer({...response.data})
          })
          .catch((err) => console.error(err));
      }, []);

     /*  let id = beer._id  */

      console.log(beer)

      return<div>
      <img src={beer.image_url} alt={beer.name} />
          <h1>{beer.name}</h1>
          <h3>{beer.attenuation_level}</h3>
          <h2>{beer.tagline}</h2>
           <p>{beer.first_brewed}</p>
           <p>{beer.description}</p>
           <p>{beer.contributed_by}</p>
      </div>
}

export default RandomBeer