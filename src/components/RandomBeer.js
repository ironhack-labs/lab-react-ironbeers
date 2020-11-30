import React, { useState, useEffect }  from 'react';
import './RandomBeer.css';
import axios from "axios";


 function RandomBeer(props) {

    const [randomBeer, setRandomBeer] = useState({});

    useEffect(() => {
        axios
       .get(
         `https://ih-beers-api2.herokuapp.com/beers/random`
       )
       .then((beerResult) => {
         console.log(`THE ID IS ${beerResult.data}`)
         setRandomBeer(beerResult.data);
       })
       .catch((error) => console.error(`Something went wrong with the handleBeersList function: ${error}`));
    },[]);

    return (
        <div>
        <h1>Random Beer</h1>
            <ul>
                <li>
                    <div className="container-div">
                        <div className="element-div">
                            <img src={randomBeer.image_url} alt={randomBeer.name} width="150px"/>
                        </div>
                        <div className="element-div-1">
                            <h1>name: {randomBeer.name}</h1>
                            <p>{randomBeer.tagline}</p>
                            <p>{randomBeer.first_brewed}</p>
                            <p>{randomBeer.attenuation_level}</p>
                            <p>{randomBeer.description}</p>
                            <p>Contributed by: {randomBeer.contributed_by}</p> 
                        </div>
                    </div>
                    
                </li>
            </ul>
        </div>
    )
}

export default RandomBeer;