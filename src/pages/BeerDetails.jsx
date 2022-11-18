import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import axios from 'axios';

function BeerDetails() {
    const [thisBeer, setThisBeer] = useState(null);

    const { id } = useParams();

    const getThisBeer = async () => {
        try {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
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

export default BeerDetails