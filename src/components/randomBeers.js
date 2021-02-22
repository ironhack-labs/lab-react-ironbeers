import React, { useEffect } from 'react';
import { getRandomBeer } from '../service/service';

function RandomBeers() {
  const [state, setState] = React.useState([]);

  async function getData() {
    const data = await getRandomBeer();
    setState(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="card">
      <img src={state.image_url} alt="all-beers" className="img"></img>
      <div>
        <h2>{state.name}</h2>
        <h4>{state.tagline}</h4>
        <h4>{state.first_brewed}</h4>
        <h4>{state.attenuation_level}</h4>
        <p>{state.description}</p>
        <h5>Created by {state.contributed_by}</h5>
      </div>
    </div>
  );
}
export default RandomBeers;
