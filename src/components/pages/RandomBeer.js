import React, { useState, useEffect } from 'react';
import Nav from "../Nav";
import apiBeers from "../../utils/apiBeers";

const RandomBeer = () => {

    const [ randomBeer, setRandomBeer ] = useState([])
    useEffect(() => {
        const getRandomBeer = async () => {
            const fetchRandomBeer = await apiBeers.getRandomBeer()
            setRandomBeer(fetchRandomBeer)
        }
        getRandomBeer();
    }, [])
    const getRandomBeer = async () => {
        const fetchRandomBeer = await apiBeers.getRandomBeer()
        setRandomBeer(fetchRandomBeer)
    }
    return (
    <div className="random--container">
        <Nav />
        <button onClick={getRandomBeer}>New Beer</button>
        <figure>
            <img className="product--random" src={randomBeer.image_url} alt="image_beer" />
        </figure>
        <div className="random--name" >
            <h3 >{randomBeer.name}</h3>
            <h4>{randomBeer.attenuation_level}</h4>
        </div>
        <div className="random--tagLine_brewed">
            <h3 style={{color:"rgb(181, 181, 181)"}}>{randomBeer.tagline}</h3>
            <h4>{randomBeer.first_brewed}</h4>
       </div>
       <div className="random--discription">
            <p>{randomBeer.description}</p>
       </div>
       <div className="random--contibuted_by">
            <h3>{randomBeer.contributed_by}</h3>
       </div>


    </div>
  );
};

export default RandomBeer;
