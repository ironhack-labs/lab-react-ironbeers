import Header from '../Header/Header';
import { useEffect, useState } from 'react';
import { beersApi } from '../App';
import { Link } from 'react-router-dom';

const AllBeers = () => {
  const [beers, setBeers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getFullList = async () => {
    const { data } = await beersApi.get('/');
    setBeers(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getFullList();
  }, []);

  console.log(beers);

  return (
    <div>
      <Header />
      {isLoading && (
        <div
          style={{ display: 'flex', alignItems: 'center', height: '80vh' }}
          className="p-3"
        >
          <progress className="progress is-large is-info" max="100">
            60%
          </progress>
        </div>
      )}
      {beers.map(({ image_url, name, tagline, contributed_by, _id }) => {
        return (
          <Link to={`/beers/${_id}`} key={_id}>
            <div className="card is-flex is-align-items-center">
              <div className="card-image">
                <figure
                  className="image p-3"
                  style={{
                    height: 120,
                    width: 80,
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src={image_url}
                    style={{ height: 120, width: 'auto' }}
                    alt="Placeholder"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{name}</p>
                  </div>
                </div>
                <div className="content">
                  <p>{tagline}</p>
                  <p>Created by {contributed_by}</p>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default AllBeers;
