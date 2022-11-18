import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

function RandomBeer() {
    const [thisBeer, setThisBeer] = useState(null);


    const getThisBeer = async () => {
        try {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`);
            setThisBeer(response.data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getThisBeer();
    }, []);

  return (
    <div>
    <div>
    <Link to='/'>
        <img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" alt="navbar" />
    </Link>
    </div>
        {thisBeer && <div>
            <img src={thisBeer.image_url} alt="beer" />
            <h3>{thisBeer.name}</h3>
            <p>{thisBeer.tagline}</p>
            <p>{thisBeer.first_brewed}</p>
            <p>{thisBeer.description}</p>
            <p>{thisBeer.attenuation_level}</p>
            <p>{thisBeer.contributed_by}</p>
        </div>
        }
    </div>
  )
}

export default RandomBeer