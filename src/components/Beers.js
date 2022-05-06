import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.js';

function Beers () {

    const [beers, setBeers] = useState([]);
    
    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
        .then(response => response.json())
        .then(data => setBeers(data)); 
    }, [])
    console.log(beers);
    return (
        <div className='Beers'>
            <Header></Header>
            <div className='beers-list'>
                {beers.map(beer => (
                    <Link key={beer._id} className='Link' to={`/beers/${beer._id}`}>
                        <div className='Beer'>
                            <div className='col-1'>
                                <img src={beer.image_url} alt='beer'/>
                            </div>
                            <div className='col-2'>
                                <h1>{beer.name}</h1>
                                <p className='beer-tagline'>{beer.tagline}</p>
                                <p className='beer-created'><strong>Created by: </strong>{beer.name}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Beers;