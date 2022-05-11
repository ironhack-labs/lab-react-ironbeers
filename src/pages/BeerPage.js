import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function BeerPage () {
    const [beers, setBeers] = useState([]);

    useEffect(()=> {
        axios
        .get('https://ih-beers-api2.herokuapp.com/beers')
        .then((response) => {
            console.log(response.data)
            setBeers(response.data)
        })
    }, [])

    return (
        <div>
        <Link to='/'>Header</Link>  
        {beers.map(beer =>
            <div className='beerCard' key={beer._id} beers={beers}>
                <Link to={`/beers/${beer._id}`} >
                <img src={beer.image_url} alt="beer"></img>
                <h2>{beer.name}</h2>
                <h4>{beer.tagline}</h4>
                <p><strong>Created by:</strong> {beer.contributed_by}</p>
                </Link>
            </div>
        )}
        </div>
    )
}

export default BeerPage;