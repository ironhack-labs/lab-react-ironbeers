import './Beer.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Beer = () => {

    const baseUrl = "https://ih-beers-api2.herokuapp.com/beers";
    const [beer, setBeer] = useState({});
    const {beerId} = useParams();

    useEffect(() => {
        axios
            .get(`${baseUrl}/${beerId}`)
            .then(response => {
                setBeer(response.data);
            })
            .catch(e => console.log(e))
    }, [])

    return <div className="Beer">
        <img src={beer.image_url} alt={beer.name} style={{height: "300px"}}></img>
        <h2>{beer.name}</h2>
        <h3>{beer.tagline}</h3>
        <h4>{beer.attenuation_level}</h4>
        <h5>{beer.first_brewed}</h5>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>

    </div>
}

export default Beer;