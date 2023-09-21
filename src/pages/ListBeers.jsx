import Header from '../components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../pages/ListBeers.css';
import { Link } from 'react-router-dom';
function ListBeers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      console.log(console.log(response.data));
      setBeers(response.data);
    });
  }, []);

  return (
    <div>
      <div className="header">
        <Header />
      </div>

      {beers.map((beer) => {
        return (
          <div className="all-beers-wrapper" key={beer._id}>
            <div className="all-beers-container">
              <div>
                <img className="one-beer-img" src={beer.image_url} alt="beer" />
              </div>
              <div className="beer-content">
                <Link className="list-beer-link" to={`/beers/${beer._id}`}>
                  <h1>{beer.name}</h1>
                </Link>

                <h2>{beer.tagline}</h2>
                <h3>Created by: {beer.contributed_by}</h3>
              </div>
            </div>

            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default ListBeers;
