import React from 'react';
import { Link } from 'react-router-dom';

function AllBeers({ beersList }) {
  const [query, setQuery] = React.useState('');

  const handleChange = ({ target }) => setQuery(target.value);

  function includesName(beer, query) {
    return beer.name.toLowerCase().includes(query.toLowerCase());
  }

  return (
    <div className="list-group list-group-flush">
      <input
        className="input"
        type="text"
        name="query"
        placeholder="search..."
        value={query}
        onChange={handleChange}
      />
      {!beersList ? (
        <h1>...Loading</h1>
      ) : (
        beersList.data.reduce((beers, beer) => {
          if (includesName(beer, query)) {
            beers.push(
              <Link key={beer._id} to={`/${beer._id}`}>
                <div
                  style={{ display: 'flex', alignItems: 'center' }}
                  key={beer._id}
                  className="list-group-item"
                >
                  <div style={{ margin: '20px' }}>
                    <img
                      style={{ maxWidth: '15vw' }}
                      alt={beer.name}
                      src={beer.image_url}
                    />
                  </div>
                  <div style={{ margin: '50px auto' }}>
                    <h3 style={{ fontSize: '8vw' }}>{beer.name}</h3>
                    <p style={{ fontSize: '4vw' }}>{beer.tagline}</p>
                    <p style={{ fontSize: '4vw' }}>
                      <strong>Created by:</strong>
                      {beer.contributed_by}
                    </p>
                  </div>
                </div>
              </Link>
            );
          }
          return beers;
        }, [])
      )}
    </div>
  );
}

export default AllBeers;
