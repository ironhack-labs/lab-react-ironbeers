import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect} from 'react';
import Navbar from '../../components/Navbar';

const beerAPI = "https://ih-beers-api2.herokuapp.com/beers";

function BeerDetails(props) {
    const { beerId } = useParams();
    const [fetching, setFetching] = useState(true);
    const [theBeer, setTheBeer] = useState([]);

    useEffect(() => {
      axios.get(beerAPI + `/${beerId}`).then((res) => {
        setTheBeer(res.data);
      });
    }, []);

    return (
        <div>
            <Navbar />
            <h1>Details</h1>
            <img src={theBeer.image_url} />
            <h2>{theBeer.name}</h2>
            <p>{theBeer.tagline}</p>
            <p>{theBeer.first_brewed}</p>
            <p>{theBeer.attenuation_level}</p>
            <p>{theBeer.description}</p>
            <p>{theBeer.contributed_by}</p>
        </div>
    );
}

export default BeerDetails;