import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';

function BeerDetails(props) {
    const [state, setState] = useState([
      {
        image_url: '',
        name: '',
        ibu: '',
        ph: '',
        tagline: '',
        first_brewed: '',
        attenuation_level: '',
        description: '',
        contributed_by: '',
        _id: '',
      },
    ]);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const id = props.match.params.id;
          const response = await axios.get(
            `https://ih-beers-api2.herokuapp.com/beers/${id}`
          );
  
          let beer = response.data;
  
          setState({
            image_url: beer.image_url,
            name: beer.name,
            ibu: beer.ibu,
            ph: beer.ph,
            tagline: beer.tagline,
            first_brewed: beer.first_brewed,
            attenuation_level: beer.attenuation_level,
            description: beer.description,
            contributed_by: beer.contributed_by,
            _id: beer._id,
          });
        } catch (err) {}
      }
      fetchData();
    }, [props]);
  
    return (
      <div className="container px-3">
        <Header></Header>
        <img src={state.image_url} alt={state.name} />
        <div className="beerFlex">
          <h2>{state.name}</h2>
          <h4>{state.attenuation_level}</h4>
        </div>
        <div className="beerFlex">
          <h6>{state.tagline}</h6>
          <small>{state.first_brewed}</small>
        </div>
        <div className="beerFlex1">
          <p>
            <strong>IBU: </strong>
            {state.ibu}
          </p>
          <p>
            <strong>pH: </strong>
            {state.ph}
          </p>
        </div>
        <div>
          <p>{state.description}</p>
        </div>
        <small>{state.contributed_by}</small>
      </div>
    );
  }
  
  export default BeerDetails;