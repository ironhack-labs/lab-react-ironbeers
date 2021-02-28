import React from 'react';


export default function RandomBeer (props) {
   const randomBeer = props.location.state.beers[Math.floor(Math.random()*props.location.state.beers.length)];
   console.log(randomBeer);
    return(
        <div>
     <h1>{randomBeer.name}</h1>
        </div>
    )
}