import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import HomePage from "./HomePage";
import Beers from "./beers"
import Home from "../assets/home.png";

const BeerId = ({beers}) => {

    const { beerId } = useParams();
    const foundBeer = beers.find((beer) => {
      return beer._id === beerId;
    });

    return (
        <>
            <header>
            <Link to="/beers"><h1>Back to all the Beers</h1>
            </Link>
        </header>
        <div>
        {foundBeer && (
            <><h1 className="p-5">{foundBeer.imgage_url}</h1><h1>{foundBeer.name}</h1><h1> {foundBeer.tagline}</h1><h1>{foundBeer.first_brewed}</h1><h1>{foundBeer.attenuation_level}</h1><h1>{foundBeer.description}</h1><h1>{foundBeer.contributed_by}</h1></>
            )}
        </div>
        </>
    )
}

export default BeerId