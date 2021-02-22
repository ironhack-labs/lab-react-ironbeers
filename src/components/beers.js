import React, { useEffect } from 'react';
import { getBeers } from '../service/service';
import { Link } from 'react-router-dom';

function Beers() {
  const [state, setState] = React.useState([]);

  async function getData() {
    const data = await getBeers();
    setState(data);
  }

  useEffect(() => {
    // o undefined o una f(x)
    getData();
  }, []);

  return (
    <div>
      {state.map((beer) => {
        return (
          <div key={beer._id}>
            <img src={beer.image_url} alt={beer.name} className="img"></img>
            <h2>
              <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
            </h2>
            <h4>{beer.tagline}</h4>
            <h5>Created by {beer.contributed_by}</h5>
          </div>
        );
      })}
    </div>
  );
}

export default Beers;
