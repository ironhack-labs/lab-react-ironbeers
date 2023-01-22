import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

function RandomBeer(props) {
    const randomBeer = props.randomBeer;
    
    const renderInfo = (beer) => {
        return (
            <div className="singleBeerCard">
                <img src={beer?.image_url} alt="" />
                <div className="beerText">
                    <h1>{beer.name}</h1>
                    <h2>{beer.tagline}</h2>
                    <h3>{beer.attenuation_level}</h3>
                    <p>{beer.first_brewed}</p>
                    <p>{beer.description}</p>
                    <p><strong>Created by: </strong>{beer.contributed_by}</p>
                </div>
            </div>
        )
    }

    return (
        <div>
            {/* fix bug of just render one random beer of useEffect run once, but it's not single page website anymore*/}
            <a href="/"><img className="header" src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" alt=""></img></a>
            {!randomBeer
                ? <h1>Loading...</h1>
                : renderInfo(randomBeer)
           }
        </div>
    )
}

export default RandomBeer;