import React from 'react';
import axios from 'axios';
import homeLinkHeader from '../assets/ironhack-lab-react-ironbeers-home-header.png';
import { Link, useParams } from 'react-router-dom';

const BeerDetails = () => {
    const [beer, setBeer] = React.useState({});
    const {beerId} = useParams();

    React.useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then((results) => {
                setBeer(results.data);
            })
            .catch((err) => {
                console.error(err.message);
            });
    }, []);

    return (
        <div>
            <header>
                <Link to="/">
                    <img className="homeLinkHeader" src={homeLinkHeader} alt="Link to Homepage"/>
                </Link>
            </header>
            <h1>Beer details for {beer.name}</h1>
            <div>
                <img src={beer.image_url} alt={beer.name}/>
                <h1>{beer.name}</h1>
                <p>{beer.tagline}</p>
                <p>First brewed on: {beer.first_brewed}</p>
                <p>Attentuation Level: {beer.attenuation_level}</p>
                <p>Description: {beer.description}</p>
                <p>Contributed by: {beer.contributed_by}</p>
            </div>
        </div>
    )
}

export default BeerDetails;