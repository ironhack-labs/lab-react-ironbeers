import React from 'react';
import axios from "axios"
import {useState, useEffect} from "react"
import { Switch, Route, Link, Router } from "react-router-dom"

function DetailBeer(props) {

const [beer, setBeer] = useState([]);
const[fetching, setFetching] = useState(true); 


useEffect(() => {                                        
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${props.match.params.id}`)
      .then((response) => {
        console.log('response.data', response.data);
        setBeer(response.data);
        setFetching(false); 
      });  
  }, [] ); 


  
 if (fetching) {  
    return (<p>Loading...</p>)
    }

 else {
    return (
        <div>
            <div className="link-home-page">
                <Link to="/">Home Page</Link>
            </div>
            <h2>{beer.name}</h2>
        
                <div className="beer-card">         
                   <img src={beer.image_url}></img>
                   <div className="beer-card-info">
                      <p>{beer.tagline}</p>
                      <p>{beer.first_brewed}</p>
                      <p>{beer.cattenuation_level}</p>
                      <p>{beer.description}</p>
                      <p>{beer.contributed_by}</p>
                   </div>

                </div>
        </div>

            )
    }
       
 }





export default DetailBeer