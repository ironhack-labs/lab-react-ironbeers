import React, { useState, useEffect } from 'react';
import { fetchOne as fetchOneBeer } from "../services/beers";
import Header from '../components/Header';

const SingleBeer = props => {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    (async function() {
      const data = await fetchOneBeer(props.match.params.id);
      setBeer(data);
    })();
  }, [props.match.params.id]) 

  if(beer !== null) {
    return (
      <div>
        <Header/>
        <div className="card">
          <img src={beer.image_url} className="card-img-top" style={{maxWidth: "200px"}}/>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <h5 className="card-title">{beer.name}</h5>
              </div>
              <div className="col">
                <h4 className="card-title text-secondary">{beer.attenuation_level}</h4>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="text-secondary">{beer.tagline}</p>
              </div>
              <div className="col">
                <p><strong>{beer.first_brewed}</strong></p>
              </div>
            </div>
            <p className="card-text">{beer.description}</p>
            <p className="card-text"><small className="text-muted">{beer.contributed_by}</small></p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <div className="spinner-grow" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }
}

export default SingleBeer;
