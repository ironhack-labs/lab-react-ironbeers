import { useEffect, useState } from 'react';
import Header from './Header.js';
import BeerDetails from './BeerDetails.js';

function RandomBeer() {
    const [beer, setBeer] = useState([]);

    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers/random')
        .then(response => response.json())
        .then(data => setBeer(data)); 
    }, []);

    return (
        <div className='RandomBeer'>
        <Header></Header>
        <BeerDetails beer={beer}/>
        </div>
    )
}

export default RandomBeer;