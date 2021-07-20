import {Link} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ListBeers(){

    const [listState, setListState]= useState([])

    useEffect(()=>{
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((res => {
            const beersList = res.data
            setListState(beersList)
            }))
        .catch(err=>console.log(err))
    }, [])

    return (
        <div>
            <header className="layoutHead"><Link to="/"><img src="assets/house.png" alt="house"/></Link></header>
            {listState.map((beer) => {
                return <div>
                    <Link to={`/beers/${beer._id}`}>
                        <img src={beer.image_url} alt="beer" />
                        <h1>{beer.name}</h1>
                        <h2>{beer.tagline}</h2>
                        <p>Created by: {beer.name}</p>
                    </Link>
                </div>
            })}
        </div>
    )
}