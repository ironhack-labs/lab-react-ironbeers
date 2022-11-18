import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

function Beer() {
    const [beers, setBeers] = useState([]);

    const getBeers = async () => {
        try {
            const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
            setBeers(response.data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBeers();
    }, [])

  return (
    <div>
        <Link to='/'>
            <img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" alt="Home image" />
        </Link>

        <div>
            {beers.map((beer) => (
                <div key={beer._id}>
                    <img src={beer.image_url} alt="beer" />
                    <h3>{beer.name}</h3>
                    <p>{beer.tagline}</p>
                    <p>{beer.contributed_by}</p>
                    <Link to={`/beer/${beer._id}`}>Details</Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Beer