import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from '../Navbar/Navbar';

const SingleBeer = (props, xx) => {
    console.log(props)
    const [beer, setBeer] = useState({
image: '',
name: '',
tagline: '',
first_brewed:'',
attenuation_level:'',
description:'',
contributed_by:'',
    });
console.log(props)
    useEffect(() => {
      axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/${props.match.params.id}`)
        .then((response) => {
          //console.log(response);
          setBeer({...response.data});
        })
        .catch((err) => console.error(err));
    }, [props.match.params.id]);

    console.log(beer)
    return<div>
     <Navbar />
    <img src={beer.image_url} alt={beer.name} />
        <h1>{beer.name}</h1>
        <h3>{beer.attenuation_level}</h3>
        <h2>{beer.tagline}</h2>
         <p>{beer.first_brewed}</p>
         <p>{beer.description}</p>
         <p>{beer.contributed_by}</p>
    </div>
}

export default SingleBeer