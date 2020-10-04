import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import Header from './Header';

function BeerDetail() {

const [state, setState] = useState({})    
const beerId = useParams().id; 

useEffect(async() => {
    const specificBeer = await axios.get('https://ih-beers-api2.herokuapp.com/beers/' + beerId)
   setState(specificBeer.data);
   console.log(specificBeer.data)
}, [beerId])


return (
    <div>
    <Header />    
    <img src={state.image_url} height="150" width="100" />
    <p>{state.name}</p>
    <p>{state.tagline}</p>
    <p>{state.frist_brewed}</p>
    <p>{state.attenuation_level}</p>
    <p>{state.description}</p>
    <p>{state.contributed_by}</p>
</div>
)
}

export default BeerDetail