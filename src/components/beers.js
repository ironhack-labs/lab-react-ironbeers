import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "./header"

const Beers = () => {
    const [beerListResults, setBeerListResults] = useState([])

        useEffect(() => {
            axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
            .then(beerResults => setBeerListResults(beerResults.data),
            console.log(beerListResults))
            .catch(error =>  `${error}`)
        }, [])

  return (
   <div>
    <Header /> 
    {beerListResults.length ? 
        beerListResults.map((beer, index) => {
        return(
            <div className="column is-two-thirds">
            <div className="card" key={index}>
                <div className="card-image">
                    <figure width="auto" height="120">
                        <img src={beer.image_url}/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media-content">
                        <h3 className="title is-3">{beer.name}</h3>
                        <p className="subtitle is-6">{beer.tagline}</p>
                        <p className="subtitle is-6"><b>Created by: </b>{beer.contributed_by}</p>
                    </div>
                </div>
            </div> 
            </div>   
        )
    }) 
    : <p>Loading</p>
    }
    </div>
  )
};

export default Beers;