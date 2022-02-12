import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './Beers.css';

export default function Beers (props){
    console.log(props)
    const { id } = useParams();

    return (
        <div className="beers">
            {props.beers.map(beer => (
                <div className="beer-card" key={beer.id}>
                <Link to={`/beers/${id}`}>
                    <img src={beer.image_url} alt={beer.name} />
                    <h1>{beer.name}</h1>
                    <p>{beer.tagline}</p>
                    <p>{beer.description}</p>
                    <p>{beer.first_brewed}</p>
                    <p>{beer.contributed_by}</p>
                </Link>
                </div>
            ))}
        </div>
    )
}