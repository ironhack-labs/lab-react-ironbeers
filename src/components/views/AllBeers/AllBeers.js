import React from 'react';
import Header from '../../Header/Header';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function AllBeers() {
  const [beers, setBeers] = React.useState([]);

  const [loading, setLoading] = React.useState(true);

  const getBeers = async () => {
    try {
      const { data } = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );

      setBeers(data);

      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  React.useEffect(() => {
    getBeers();
  }, []);

  return (
    <>
      <Header />

      {loading
        ? 'loading...'
        : beers.map((beer) => (
            
            <Link to={`/beers/${beer._id}`} key={beer._id} style ={{color: "black",
         textDecoration: "none"}}>
            <div
              
              id="beer-details"
              style={{
                display: 'flex',
                width: '30%',
                justifyContent: 'space-around',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  width: '50%',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={beer.image_url}
                  style={{ height: '120px' }}
                  alt="beer-img"
                />
              </div>

              <div>
                <p>{beer.name}</p>
                <p>{beer.tagline}</p>
                <p>Created by: {beer.contributed_by}</p>
              </div>
            </div>
            <hr/>
            </Link>
            
          ))}
    </>
  );
}
