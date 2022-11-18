import NavBar from '../assets/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png'
import React from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect} from 'react';


function BeerDetails() {

    const {id} = useParams();
    const [beers, setBeers] = useState({});
  
    const getBeers = async () => {
      try {
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
        setBeers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
        getBeers();
      }, [id]);
    
    

    return (
        <>
            <Link to="/">
                <img src={NavBar} alt="" />
            </Link>
            <img src={beers.image_url} alt="beer" />
            <h3>{beers.name}</h3>
            <p>{beers.tagline}</p>
            <p>{beers.first_brewed}</p>
            <p>{beers.attenuation_level}</p>
            <p>{beers.description}</p>
            <p>{beers.contributed_by}</p>

        </>
    )
 
    }
export default BeerDetails


