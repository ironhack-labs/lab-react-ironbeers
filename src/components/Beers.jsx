import React from 'react';
import {Link} from 'react-router-dom';

export default function Beers(props) {
    console.log(props)
    if(props.beers.length === 0){
      return <h1>Beers are in the fridge</h1>
    }
    return (
        <div>
            <ul>
            {props.beers.map((beer) => (
            
             <Link key={beer._id} to={`/beers/${beer._id}`}><li>{beer.name}</li></Link>
            ))}
            </ul>
        </div>
    )
}
