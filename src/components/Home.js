import React from 'react';
import { Link } from 'react-router-dom';
import BeersPhoto from '../assets/beers.png';
import NewBeerPhoto from '../assets/new-beer.png';
import RandomBeerPhoto from '../assets/random-beer.png';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-links">
          <div className="Home-card">
            <Link to="/beers">
              <img src={BeersPhoto} alt="Beers" className="Home-img" />
              <h3>All Beers</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
                tenetur, enim nostrum.
              </p>
            </Link>
          </div>
          <div className="Home-card">
            <Link to="/random-beer">
              <img src={RandomBeerPhoto} alt="Random beer" className="Home-img" />
              <h3>Random Beer</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
                tenetur, enim nostrum.
              </p>
            </Link>
          </div>
          <div className="Home-card">
              <Link to="/new-beer">
                <img
                  src={NewBeerPhoto}
                  alt="New Beer"
                  className="Home-img"
                />
                <h3>New Beer</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
                  tenetur, enim nostrum.
                </p>
              </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
