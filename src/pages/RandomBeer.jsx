import Header from "../components/Header";
import BeerDetail from "../components/BeerDetail";

import { useState, useEffect } from "react";
import axios from "axios";

function RandomBeer(){

    const [randomBeer, setRandomBeer] = useState({})

    useEffect(()=>{
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then(beer=>setRandomBeer(beer.data))
        .catch((err) => console.log(err))
    },[])

    return (
        <>
        <Header />
        <BeerDetail beer={randomBeer} />
        </>
    )
}

export default RandomBeer