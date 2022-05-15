import React from 'react';
import { useParams } from "react-router-dom"

function BeerDetails(props) {

    const { id } = useParams();

    const beerArr = props.beers;
    console.log("beeerr  ", beerArr)
    

    const beerDetails = beerArr.find((beer) => {
        return beer.id === id;
    });

    const beerDetailsFunc = () => {
        return (
            <>
                <h2>{beerDetails.name}</h2>
            </>
        )
    }
    
    return (
<div>
        {beerDetails ? beerDetailsFunc() : <p>Checking....</p>}
</div>
    )
}

export default BeerDetails