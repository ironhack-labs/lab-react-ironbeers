import axios from 'axios';
import { useEffect, useState } from 'react';

export const AllBeers = () => {
  const [beers, setBeers] = useState(null);

  useEffect(() => {
    getBeersFromApi();
  }, []);

  const getBeersFromApi = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}`)
      .then((res) => setBeers(res.data))
      .catch((e) => console.log('Error GET beers from API.......', e));
  };

  if (beers === null) {
    return <p>loading...</p>;
  } else {
    return (
      <div className="all-beers grid row-gap-3 d-flex flex-column justify-content-center align-items-center row">
        {beers.map((beer) => {
          return (
            <div
              class="beer-card d-flex flex-row card pt-3"
              style={{ width: '35rem' }}
            >
              <div
                class="d-flex align-self-center col-1"
                style={{ height: '5rem', width: '3rem' }}
              >
                <img
                  className="beer-card-img"
                  style={{
                    'object-fit': 'contain',
                    width: '100%',
                    height: '100%',
                  }}
                  src={beer.image_url}
                  class="card-img-top "
                  alt={`image of ${beer.name}`}
                />
              </div>
              <div class="card-body ">
                <h5 class="card-title d-flex">{beer.name}</h5>
                <p class="card-text text-start">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};
