import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneBeer } from '../service/service';

function OneBeer() {
  const params = useParams();
  const { id } = params;
  const [beer, setBeer] = React.useState([]);

  async function getData(id) {
    const data = await getOneBeer(id);
    setBeer(data);
  }

  useEffect(() => {
    getData(id);
  }, []);

  return (
    <div className="card">
      <img src={beer.image_url} alt="all-beers" className="img"></img>
      <div>
        <h1>hola</h1>
        <h2>{beer.name}</h2>
        <h4>{beer.tagline}</h4>
        <h4>{beer.first_brewed}</h4>
        <h4>{beer.attenuation_level}</h4>
        <p>{beer.description}</p>
        <h5>Created by {beer.contributed_by}</h5>
      </div>
    </div>
  );
}
export default OneBeer;
