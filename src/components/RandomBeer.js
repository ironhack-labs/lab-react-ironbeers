import React from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const RandomBeer = () => {
    const [randBeer, setRandBeer] = React.useState([]);
    const { beerId } = useParams();

    React.useEffect(() => {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then((results) => {
                console.log(results.data);
                setRandBeer(results.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [beerId]);

    return (
        <div>
            <header className='homepage'>
                <Link to='/'>Home</Link>
            </header>
            <div key={randBeer._id}>
                <img src={randBeer.image_url} alt={randBeer.name} style={{ height: '400px'}}></img>
                    <h3>{randBeer.name}</h3>
                    <h4><i>{randBeer.tagline}</i></h4>
                    <h4>{randBeer.first_brewed}</h4>
                    <h4>{randBeer.attenuation_level}</h4>
                    <p>{randBeer.description}</p>
                    <h4>Created by: {randBeer.contributed_by}</h4>
            </div>
        </div>
        
    )
}

export default RandomBeer;