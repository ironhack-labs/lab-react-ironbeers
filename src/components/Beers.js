import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.js';

function Beers () {

    const [beers, setBeers] = useState([]);
    const [beersFilter, setBeersFilter] = useState('');

    function handleBeersFilterChange(e) {
        setBeersFilter(e.target.value);
    }
    
    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
        .then(response => response.json())
        .then(data => setBeers(data)); 
    }, [])
    
    return (
        <div className='Beers'>
            <Header></Header>
            <form className='beers-filter'>
                <input type='text' value={beersFilter} onChange={handleBeersFilterChange}></input>
            </form>
            
            <div className='beers-list'>
                {beers
                .filter(beer => {
                    return beer.name.toLowerCase().includes(beersFilter.toLowerCase());
                })
                .map(beer => (
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