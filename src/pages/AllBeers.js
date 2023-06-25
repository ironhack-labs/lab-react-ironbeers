import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const AllBeers = () => {
  const [beers, setBeers] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    getBeersFromApi();
  }, []);

  const getBeersFromApi = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}`)
      .then((res) => setBeers(res.data))
      .catch((e) => console.log('Error GET beers from API.......', e));
  };
  let filteredBeers = beers;
  if (beers === null) {
    return <p>loading...</p>;
  } else {
    const handleInput = (e) => {
      setQuery(e.target.value);
    };
    filteredBeers = beers.filter((beer) => {
      return beer.name.toLowerCase().includes(query.toLowerCase());
    });
    return (
      <div className="all-beers grid row-gap-3 d-flex flex-column justify-content-center align-items-center row">
        <div>
          <label className="mx-2">Search</label>
          <input value={undefined} type="text" onChange={handleInput} />
        </div>

        {/* showing message if theres search input */}
        {query !== '' &&
          (filteredBeers.length === 0
            ? 'No result found'
            : `${filteredBeers.length} results`)}

        {/* render filtered beers accordingly to search input */}
        {filteredBeers.map((beer) => {
          return (
            <div style={{ maxWidth: '35rem', width: '100%' }}>
              {/* embeded the whole individual beer component with a Link */}
              <Link
                className="beer-card d-flex flex-row card px-3"
                to={`/${beer._id}`}
              >
                <div
                  className="d-flex align-self-center col-1"
                  style={{ height: '5rem', width: '3rem' }}
                >
                  <img
                    className="beer-card-img card-img-top"
                    style={{
                      'object-fit': 'contain',
                      width: '100%',
                      height: '100%',
                    }}
                    src={beer.image_url}
                    alt={`image of ${beer.name}`}
                  />
                </div>
                <div className="card-body ">
                  <h5 className="card-title d-flex">{beer.name}</h5>
                  <p className="card-text text-start">
                    <h6 className="text-black-50">{beer.tagline}</h6>
                    <p>
                      <span className="fw-medium">Created by: </span>
                      {beer.contributed_by}
                    </p>
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
};
