import { useState, useEffect } from 'react';
import { json, Link } from 'react-router-dom';

function Beers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers').then((res) =>
      res.json()
    );
    console
      .log(json)
      .then((json) => setBeers(json))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {beers.map((beer) => {
        return (
          <Link
            to={`/single-beer/${beer._id}`}
            key={beer._id}
            className="list-item"
          >
            <div className="list-img">
              <img src={beer.image_url} alt={beer.name} />
            </div>
            <div className="list-info">
              <h3>{beer.name}</h3>
              <h4>{beer.tagline}</h4>
              <h5>Created by: {beer.contributed_by}</h5>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Beers;
