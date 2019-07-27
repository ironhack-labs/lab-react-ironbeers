import React from 'react'

export default function Random(props) {
    if(props.ready){

        let randomBeer = props.beers[Math.floor(Math.random()*props.beers.length)];
        let beer = 
        <div>
            <img src={randomBeer.image_url} />
            <h2>{randomBeer.name}</h2>
            <p>{randomBeer.brewers_tips}</p>
            <p>{randomBeer.description}</p>
        </div>;

        return (
            <div>
                {beer}
            </div>
        )
    }else{
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
}
