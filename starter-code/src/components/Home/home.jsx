import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div style={{ width: '700px' }}>
        <div>
          <div>
            <img src="./images/beers.png" alt="beers" />
          </div>
          <div style={{ padding: '2vh 2vw' }}>
            <Link to="/beers">
              <h1>All Beers</h1>
            </Link>
            <p>Lorem</p>
          </div>
        </div>
        <div>
          <div>
            <img src="./images/random-beer.png" alt="random beers" />
          </div>
          <div style={{ padding: '2vh 2vw' }}>
            <Link to="/randombeer">
              <h1>Random Beers</h1>
            </Link>
            <p>Lorem</p>
          </div>
        </div>
        <div>
          <div>
            <img src="./images/new-beer.png" alt="new beers" />
          </div>
          <div style={{ padding: '2vh 2vw' }}>
            <Link to="/newbeer">
              <h1>New Beer</h1>
            </Link>
            <p>Lorem</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
