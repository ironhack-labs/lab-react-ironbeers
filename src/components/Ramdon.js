import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Ramdon(props) {
    const [beer, setBeer] = useState({
        image_url: '',
        name: '',
        tagline: '',
        first_brewed: '',
        attenuation_level: 0,
        description: '',
        contributed_by: '',
      });

    useEffect(()=>{
        async function fetchData() {
            const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random');
            
            setBeer({...response.data})
        }

        fetchData()
    }, [props])

    return (
        <>
      <div>
        <img src={beer.image_url}></img>
        <div>
          {beer.name}
          {beer.attenuation_level}
        </div>
        <div>
          {beer.tagline}
          {beer.first_brewed}
        </div>
        <div>{beer.description}</div>
        <div>{beer.contributed_by}</div>
      </div>
    </>
    )
}

export default Ramdon;