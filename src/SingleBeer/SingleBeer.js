import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { beersApi } from '../App';
import Header from '../Header/Header';

const SingleBeer = () => {
  const [beer, setBeer] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getBeer = async () => {
      const { data } = await beersApi.get(`/${id ? id : 'random'}`);
      setBeer(data);
      setIsLoading(false);
    };

    getBeer();
  }, [id]);

  console.log(beer);

  return (
    <>
      <Header />
      <div className="container p-3">
        <div className="card">
          <div className="card-image">
            <figure
              className="image p-3"
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src={beer.image_url}
                style={{ height: 200, width: 'auto' }}
                alt="Placeholder"
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content is-flex is-justify-content-space-between">
                <p className="title mb-2">{beer.name}</p>
                <p>{beer.attenuation_level}</p>
              </div>
            </div>
            <div className="content">
              <div className="is-flex is-justify-content-space-between">
                <p>{beer.tagline}</p>
                <p>{beer.first_brewed}</p>
              </div>
              <p>{beer.description}</p>
              <p>{beer.contributed_by}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBeer;
