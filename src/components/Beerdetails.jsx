import React from 'react'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar';
import {Routes, Route, useParams} from 'react-router-dom'



function Beerdetails() {
   const {beerId} = useParams();
   const [oneBeer, setOneBeer] = useState(null);

    const getFromAPI = async () => {
    try {
    const apiCall = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
    setOneBeer(apiCall.data)
    } catch (error) {
      console.log(error);
    }};
    
    useEffect(() => {
      getFromAPI();
    }, [beerId]);


  return (
    
    <div>
     
        <div>
           < Navbar/>
        <img src={oneBeer.image_url} alt="beer"/>
        <p>{oneBeer.name}</p>
        <p>Tagline: {oneBeer.tagline}</p>
        <p>First Brewed: {oneBeer.first_brewed}</p>
        <p>Attenuation level: {oneBeer.attenuation_level}</p>
        <p>Description: {oneBeer.description}</p>
        <p>Contributed_by: {oneBeer.contributed_by}</p>
        </div>
    </div>
  )
}

export default Beerdetails