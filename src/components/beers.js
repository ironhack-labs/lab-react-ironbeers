import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import Header from "./header"
import './App.css'

const Beers = () => {

    const [beerListResults, setBeerListResults] = useState([])

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
        .then(beerResults => setBeerListResults(beerResults.data))
        .catch(error => console.log(`${error}`))
    }, [])

    return (
        <div >
            <Header /> 
            {beerListResults.length ? beerListResults.map((beer) => {
                return(

                    <div key={beer._id}>
                        <div>
                            <figure >
                                <img src={beer.image_url} alt={beer.name} />
                            </figure>
                        </div>
                        <div>
                            <div>
                                <Link to={`beers/${beer._id}`}>
                                <h3>{beer.name}</h3></Link>
                                <p>{beer.tagline}</p>
                                <p><b>Created by: </b>{beer.contributed_by}</p>
                            </div>
                        </div>
                    </div> 

                )
            }) : <p>Loading</p>}
        </div>
    )
};

export default Beers;