import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from '../Navbar/Navbar';
import OneBeer from '../OneBeer/OneBeer';

const SingleBeer = (props) => {
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
     <OneBeer beer={beer}/>
    </div>
}

export default SingleBeer