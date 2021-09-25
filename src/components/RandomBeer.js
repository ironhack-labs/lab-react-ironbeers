import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function RandomBeer() {

    const [beer, setBeer] = useState({});

    // -------- MANAGING THE RANDOM LOGIC IN-HOUSE --------
    // useEffect(() => {
    //     axios.get('https://ih-beers-api2.herokuapp.com/beers')
    //         .then(res => {
    //             setBeer((res.data[Math.floor(Math.random()*res.data.length)]))
    //         })
    //         .catch(err => console.log(err));
    // }, [])
    // ------------------------------------------------

    // -------- USING THE RANDOM LOGIC OF THE API --------
    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(res => {setBeer(res.data)})
            .catch(err => console.log(err));
    }, [])


    return (
        <div>
          <div>
            <Link to="/">
              <img src="../assets/header.png" width="300px" alt="header banner" />
            </Link>
          </div>
          <br /><br />
          <img src={beer.image_url} height="200px"></img>
          <h3>{beer.name}</h3>
          <h4>{beer.tagline}</h4>
          <h4>First brewed: {beer.first_brewed}</h4>
          <h4>Attenuation level: {beer.attenuation_level}</h4>
          <h5>{beer.description}</h5>
          <h5>Contributed by: {beer.contributed_by}</h5>
        </div>
      )
}



