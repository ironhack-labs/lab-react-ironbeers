import React from 'react'
import Header from '../components/Header'
import { useState, useEffect } from 'react'
import spinner from "../logo.svg"
import axios from "axios"
import { Link } from 'react-router-dom'

const apiURL = "https://ih-beers-api2.herokuapp.com/beers"

const BeersList = () => {

    const [beers, setBeers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios
          .get(apiURL)
          .then((response) => {
            setBeers(response.data)
            setIsLoading(false)
          })
          .catch(console.log)
      }, []);    

    return (
        <div>
            <Header />

            <div className="beers-list">
                { isLoading 
                        && 
                    <p className="loading">
                        Loading beers list...
                        <img src={spinner} className="spinner" alt="spinner"/>
                    </p> 
                }
                { beers.map( (beer) => {
                    return(
                        <div className="beer-row">
                            <div className="beer-image">
                                <Link to={`/beers/${beer._id}`} key={beer._id}>
                                    <img src={beer.image_url} alt={`pic beer ${beer.name}`}/>
                                </Link>
                            </div>
                            <div className="beer-info">
                                <span className="beer-name">{beer.name}</span>
                                <span className="beer-tagline">{beer.tagline}</span>
                                <span className="beer-createdby">{beer.contributed_by}</span>
                            </div>        
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default BeersList
