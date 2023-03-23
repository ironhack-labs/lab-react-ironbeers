import './BeerList.css';
import {fetchBeers} from '../../services/services';
import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function BeerList() {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        fetchBeers().then((beers) => {
            setBeers(beers.data);
        });
    }, []);
    
    return (
        <div>
            {beers ? (
                <ul>
                    {beers.map((beer) => {
                        return (
                            <div key={beer.id}>
                                <Link className='link' to={'/beers/${beer.id}'}>
                                    <div className='Beer-container'>
                                        <div className='Beer-img'>
                                            <img src={beer.image_url} alt={beer.name} />
                                        </div>
                                        <div className='Beer-info'>
                                            <h2>{beer.name}</h2>
                                            <p className='Beer-tag'>{beer.tagline}</p>
                                            <p className='Beer-created'>
                                                <strong>Created by</strong>
                                                {beer.contributed_by}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}