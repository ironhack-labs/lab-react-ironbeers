import React, { useEffect, useState } from 'react';
import axios from 'axios';


const AllBeers = (props) => {
    const [beers, setBeers] = useState([]);
    
    useEffect(() => {
    axios
        .get(`https://ih-beers-api2.herokuapp.com/beers`)
        .then((response) => {
            setBeers(response.data);
        })
    }, [])

    return (
        <div>
            {beers.map(beer => {
               return(
                <ul>
                    <li>
                        <img src={`${beer.image_url}`} alt='beer' />
                        <a href={`/beers/${beer._id}`}>{beer.name}</a>
                        <h3>{beer.tagline}</h3>
                        <p>{beer.contributed_by}</p>                        
                    </li>
                </ul> 
               );
            })}
        </div>
    );
}

export default AllBeers;