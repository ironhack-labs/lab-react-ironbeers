import React from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const BeerDetails = () => {
    const [beer, setBeer] = React.useState([]);
    const { beerId } = useParams();

    console.log('BEER ID', beerId);

    React.useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then((results) => {
                console.log(results.data);
                setBeer(results.data);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, [beerId]);

    return (
        <div>
            <header className='homepage'>
                <Link to='/'>Home</Link>
            </header>
            <div key={beer._id}>
                <img src={beer.image_url} alt={beer.name} style={{ height: '400px'}}></img>
                <h3>{beer.name}</h3>
                <h4><i>{beer.tagline}</i></h4>
                <h4>{beer.first_brewed}</h4>
                <h4>{beer.attenuation_level}</h4>
                <p>{beer.description}</p>
                <h4>Created by: {beer.contributed_by}</h4>
            </div>
        </div>
    )
}

export default BeerDetails;