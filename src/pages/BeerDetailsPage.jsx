import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function BeerDetailsPage() {
    
    const [beer, setBeer] = useState({});

    const { beerId } = useParams();

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then(res => {
                console.log(res.data);
                setBeer(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [beerId])

    return (
        <div>
            <img style={{ width: "10%" }} src={beer.image_url} />
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
        </div>
    );
}

export default BeerDetailsPage;
