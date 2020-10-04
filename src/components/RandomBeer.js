import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './Header';

function RandomBeer() {
    const [state, setState] = useState({})    
    
    useEffect(async() => {
        const specificBeer = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
       setState(specificBeer.data);
       console.log(specificBeer.data)
    }, [])
    
    
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

export default RandomBeer;