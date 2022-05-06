import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header.js';
import BeerDetails from './BeerDetails.js'

function Beer () {
    const params = useParams();
    const [beer, setBeer] = useState([]);
    
    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
        .then(response => response.json())
        .then(data => setBeer(data)); 
    }, []);
console.log(beer);
    return (
        <div className='Beer'>
            <Header></Header>
            <BeerDetails beer={beer}/>
        </div>
    )
}

export default Beer;