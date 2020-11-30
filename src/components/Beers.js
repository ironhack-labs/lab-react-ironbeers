import React, { useState, useEffect } from 'react';
import Beer from './Beer';
import axios from "axios";



 function Beers() {

    const [beerslist, setbeersList] = useState([]);

    useEffect(() => {
        axios
       .get(
         `https://ih-beers-api2.herokuapp.com/beers`
       )
       .then((beersResult) => {
         console.log(beersResult)
         setbeersList(beersResult.data);
       })
       .catch((error) => console.error(`Something went wrong with the handleBeersList function: ${error}`));
    },[]);

    return (
        <div>
            {beerslist.map((beerItem) => (  
                <Beer key={beerItem._id} {...beerItem} />
            ))}
        </div>
    )
}

/*  /> */

export default Beers;
