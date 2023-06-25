import axios from 'axios';
import { useState, useEffect } from 'react';

function RandomBeer(props) {

    const [beersArr, setBeersArr] = useState([]);
        
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/beers/random`)
            .then(response => {
                setBeersArr(response.data);
            })
            .catch(e => console.log("Error getting beers from API", e))
    }, []);


    return (
<div>
            <h1>A random beer</h1>
            <img src={props.image_url} alt={props.name} />
            <h4>{props.name}</h4>
            <h4>{props.tagline}</h4>
            <p>First Brewed: {props.first_brewed}</p>
            <p>Attenuation Level: {props.attenuation_level}</p>
            <p>Description: {props.description}</p>
            <p>Contributor: {props.contributed_by}</p>
        </div>    )
}

export default RandomBeer;