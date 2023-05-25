import { useState, useEffect } from 'react'
import BeersList from '../components/BeersList';
import Navbar from '../components/Navbar';

const Beers = () => {
    const [beers, setBeers] = useState([])
    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => response.json())
            .then(data => setBeers(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <Navbar></Navbar>
            <BeersList beers={beers}></BeersList>
        </div>

    )
}

export default Beers