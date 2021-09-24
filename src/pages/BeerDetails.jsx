

import React from 'react'
import Header from '../components/Header';
import axios from "axios";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


export default function BeerDetails(props) {
  const [beer, setBeer] = useState({});

async function fetchData() {
    const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${props.match.params.id}`)
    console.log("this is the response",response)
    console.log("this is the response data",response.data)
    setBeer(response.data)
    console.log("this is the beer",beer)
  }

// function fetchData() {
//    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${props.match.params.id}`)
//     .then((result) => {
//           console.log("this is the beer",result.data)
//             setBeer(result.data)
//     }).catch((err) => {
//             console.log("there is no beer",err)
//     });
//   }

  
useEffect(()=>{fetchData()}
, [props.match.params.id])


    return ( 
    <div >
        <Header />
  <div className='main-beer-container'>
            <div key={beer._id} className="card" className='beer-container'>
              <img  height='250px' src={beer.image_url} alt="beers" />
              <div>
                      <h3>{beer.name}</h3>
                  <p>{beer.tagline}</p>
                    <p>first brewed : {beer.first_brewed}</p>
                    <p>attenuation level: {beer.attenuation_level}</p>
                    <p>description: {beer.description}</p> 
                  <p>Created by: {beer.contributed_by}</p>                 
              </div>
            </div>
        </div>)
    </div>
    )
}